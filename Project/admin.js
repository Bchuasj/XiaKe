// ====== VUE ===== //
const app = Vue.createApp({

    //=========== DATA PROPERTIES ===========
    data() {
        return {

            testvariable: "default",

            eventdays: [
                // {
                //     day: "24/12/2021",
                //     timeslots: ["10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00"],
                // },

            ],

            eventname: "",

            eventdesc: "",

            eventimg: "",

            cbd: "",

            eventprice: "0.00",


            tempselectdate: "",
            tempstarttime: "",
            tempinterval: 15,
            tempnumtimeslots: 8,

            temptimeslots: [],
            selected_temptimeslots: [],

            allformfields: {
                "email": "Email Address",
                "matricNo": "Matriculation Number",
                "phone": "Phone Number",
                "telegram": "Telegram Handle",
            },

            selected_fields_required: [],


        }
    },


    //=========== METHODS ===========
    methods: {

        // ===== GET CURRENT EVENT ===== //

        show_datetimeslots() {

            var temptimeslots = this.getTimeStops(this.tempstarttime, this.tempinterval, this.tempnumtimeslots)

            console.log(this.tempstarttime)

            console.log(this.temptimeslots)

            this.temptimeslots = temptimeslots
        },

        getTimeStops(start, interval, frequency) {
            var startTime = moment(start, 'HH:mm');
            var endTime = moment('23:59', 'HH:mm');

            var temptimeslots = [];
            var counter = 0

            while (startTime <= endTime && counter < frequency) {
                temptimeslots.push(new moment(startTime).format('HH:mm'));
                startTime.add(interval, 'minutes');
                counter++
            }
            return temptimeslots;
        },

        add_datetimeslots() {

            this.eventdays.push({
                day: this.tempselectdate,
                timeslots: this.selected_temptimeslots
            })

            // clear form values 
            document.getElementById("tempselectdate").value = null
            document.getElementById("tempstarttime").value = null
            document.getElementById("interval").value = 15
            document.getElementById("numtimeslots").value = 8


            // clear VUE values

            this.tempselectdate = ""
            this.tempstarttime = ""
            this.tempinterval = ""
            this.tempnumtimeslots = ""

            this.temptimeslots = []
            this.selected_temptimeslots = []

        },


        checkIfUserExists() {
            username = document.getElementById("username").value
            var user = firebase.database().ref('users/' + username);
            user.once('value').then((snapshot) => {
                if (snapshot.exists()) {
                    var value = snapshot.val()
                    // console.log(value)
                    document.getElementById("status").innerText = "Username has already been taken.";

                }
                else {
                    document.getElementById("status").innerText = "Username is available.";
                }
            });
        },

        getCurrentDate() {
            var date_str = ""
            var time = new Date()
            var date = time.getDate()
            var month = time.getMonth() + 1
            var year = time.getFullYear()
            date_str += year + "-" + month + "-" + date
            date = date_str

            console.log(date_str)
            return date_str
        },


        //The following example demostrates how to add data
        addnewevent() {
            var cbd = this.cbd
            var eventname = this.eventname
            var eventdesc = this.eventdesc
            var eventimg = this.eventimg
            var eventdays = this.eventdays
            var eventprice = this.eventprice
            var selected_fields_required = this.selected_fields_required

            var date_Created = this.getCurrentDate()

            this.addNewEventToCBD(cbd, eventname, eventdesc, eventimg, eventdays, eventprice, date_Created, selected_fields_required);
        },

        //The following writes the data
        addNewEventToCBD(cbd, eventname, eventdesc, eventimg, eventdays, eventprice, date_Created, selected_fields_required) {
            firebase.database().ref('eventDB/' + cbd + '/' + eventname).set({
                desc: eventdesc,
                image: eventimg,
                eventdays: eventdays,
                price: eventprice,
                date_Created: date_Created,
                selected_fields_required: selected_fields_required,
            }, function (error) {
                if (error) {
                    document.getElementById("status").innerText = "Add event failed";
                } else {
                    document.getElementById("status").innerText = "Add event success. Page will refresh in 5 seconds.";
                    setTimeout(() => window.location.reload(), 5000);
                }
            });
        },






    },


})

app.mount('#app')