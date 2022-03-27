// ====== VUE ===== //

const app = Vue.createApp({

    //=========== DATA PROPERTIES ===========
    data() {
        return {

            eventdays: [

            ],

            cbd: "",
            eventname: "",

            eventdesc: "",
            eventimg: "",

            eventprice: "0.00",
            paymentstat: false,

            userId: "",

            selected_fields_required: "",

            email: "",
            matricNo: "",
            phone: "",
            telegram: "",


            paxpertimeslot: 5,

            availabletimeslots: [],

            selectedeventday: "Select Event Date",
            selectedtimeslot: "Select Event Timeslot",

            stat: "",


        }
    },


    //=========== METHODS ===========
    methods: {

        // ===== EVENT RELATED ===== //


        getTimeslots() {
            // console.log("=== [START] add_to_directory ===")

            for (eventday of this.eventdays) {
                if (eventday.day == this.selectedeventday) {

                    this.availabletimeslots = eventday.timeslots
                }
            }
            // console.log("=== [END] add_to_directory ===")
        },


        getParam() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString)

            const eventname = urlParams.get('signupnow')
            const cbd = urlParams.get('cbd')

            this.eventname = eventname
            this.cbd = cbd

            this.getEventInfo()

        },


        getEventInfo() {

            var currentevent = firebase.database().ref('eventDB/' + this.cbd + '/' + this.eventname);
            currentevent.once('value').then((snapshot) => {
                if (snapshot.exists()) {
                    var eventinfo = snapshot.val()
                    console.log(eventinfo)

                    this.eventdesc = eventinfo.desc
                    this.eventimg = eventinfo.image
                    this.eventdays = eventinfo.eventdays
                    this.eventprice = eventinfo.price
                    this.selected_fields_required = eventinfo.selected_fields_required

                }



            });
        },

        allfieldsfilled() {

            if (this.selectedeventday == "Select Event Date" || this.selectedtimeslot == "Select Event Timeslot") {
                return false
            }

            for (formfield of this.selected_fields_required) {
                if (document.getElementById(formfield).value == "") {
                    return false
                }
            }

            return true
        },

        getCurrentDate() {


            var date_str = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000).toISOString().substr(0, 19);



            console.log(date_str)
            return date_str
        },


        // ===== USER RELATED ===== //

        getCurrentUser() {
            var user = firebase.database().ref('Current/' + "user");
            user.once('value').then((snapshot) => {
                if (snapshot.exists()) {
                    var value = snapshot.val()
                    console.log(value)
                    this.userId = value

                    this.getUserInfo()

                    document.getElementById("nav_username").innerText = value
                }

            });
        },


        getUserInfo() {

            var currentuser = firebase.database().ref('users/' + this.userId);
            currentuser.once('value').then((snapshot) => {
                if (snapshot.exists()) {
                    // console.log(this.userId)
                    var userinfo = snapshot.val()
                    console.log(userinfo)

                    this.email = userinfo.email
                    this.matricNo = userinfo.matricNo
                    this.phone = userinfo.phone
                    this.telegram = userinfo.telegram

                }



            });
        },


        // ===== WRITE USER DETAILS TO EVENTDB ===== //



        //The following example demostrates how to add data
        signupnow() {
            var cbd = this.cbd
            var eventname = this.eventname


            userId = this.userId
            selectedeventday = this.selectedeventday
            selectedtimeslot = this.selectedtimeslot

            date_str = this.getCurrentDate()

            signup_obj = {
                userId: userId,
                selectedeventday: selectedeventday,
                selectedtimeslot: selectedtimeslot,
                date_Created: date_str
            }

            for (formfield of this.selected_fields_required) {
                signup_obj[formfield] = document.getElementById(formfield).value
            }

            console.log(signup_obj)

            this.pushToEventRegistration(cbd, eventname, signup_obj);

            this.pushToUserEventHistory(userId, eventname, selectedeventday, selectedtimeslot)

        },

        //The following writes the data
        pushToEventRegistration(cbd, eventname, signup_obj) {
            firebase.database().ref('eventDB/' + cbd + '/' + eventname + '/registration_list').push().set(
                signup_obj
                , function (error) {
                    if (error) {
                        document.getElementById("status").innerText = "Add event failed";
                    } else {
                        document.getElementById("status").innerText = "Add event success.";
                        setTimeout(() => window.location = "./home.html", 5000);
                    }
                });
        },


        pushToUserEventHistory(userId, eventname, selectedeventday, selectedtimeslot) {
            firebase.database().ref('users/' + userId + '/eventHistory/' + eventname).set({
                datetime: selectedeventday + "T" + selectedtimeslot + ":00"
            }
                , function (error) {
                    if (error) {
                        document.getElementById("status").innerText = "Add event failed";
                    } else {
                        document.getElementById("status").innerText += " Added event to User Events History. Redirecting to Homepage in 5 seconds.";
                    }
                });
        },

        // pass_paymentstatus() {
        //     if(this.stat.length != 0) {
        //         this.paymentstat = true
        //     }
        //     return this.paymentstat
            // console.log("hellowirkd")
            // if(document.getElementById("paymentstat").value.length > 0){
            //     this.paymentstat = true
            //     paymentStatus = this.paymentstat
            // }
            // return paymentStatus
        // }




    },

    //=========== MOUNT ===========

    mounted() {

        this.getParam()

        this.getCurrentUser()


    }


})


app.mount('#app')

// ====== PAYPAL ===== //


paypal.Buttons({
    createOrder: function (data, actions) {
        // Set up the transaction
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: document.getElementById("eventprice").innerText

                }
            }]
        });
    },
    onApprove: function (data, actions) {
        // This function captures the funds from the transaction.
        return actions.order.capture().then(function (details) {
            // This function shows a transaction success message to your buyer.
            // document.getElementById("paymentstatus").innertext = 'Transaction completed by ' + details.payer.name.given_name;
            // document.getElementById('stat').value = 'Transaction successful!';

            // // document.getElementById('payment_wrapper').innerHTML = `
            // // <div>${paymentStatus}</div>
            // `
            document.getElementById("paymentsuccess").innerText="Transaction Successful!"
            document.getElementById("a_wrapper").style.display="block"
            document.getElementById("paypal").style.display="none"
            // alert("success")

        });
    }
}).render("#paypal");



