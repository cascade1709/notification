var config = {
    apiKey: "AIzaSyDgmmOyAI5qEOUcouxhSs4Tn5a4DZ3oj-o",
    authDomain: "luckykhel-cff91.firebaseapp.com",
    databaseURL: "https://luckykhel-cff91.firebaseio.com",
    projectId: "luckykhel-cff91",
    storageBucket: "luckykhel-cff91.appspot.com",
    messagingSenderId: "794965518169"
};
firebase.initializeApp(config);

const message = firebase.messaging();
//   message.usePublicVapidKey("BNlXPlJI06gx7my2AfQAtDplZpDCdPS8RsmN_3tYYZUl3eVKhnU1KBozumWuYO3txhBg0gh6rvR_RT1S-Z9DMLM");

function updateToken() {

}


message.requestPermission().then(function () {
    console.log('Permission granted');
    return message.getToken();
})
    .then(function (token) {
        // registering user for notification.

        const url = "https://iid.googleapis.com/iid/v1/"+token+"/rel/topics/everyone";
        const other_param = {
            headers: {
                "Content-Type":"application/json",
                "Authorization":"key=AAAAuRejJ1k:APA91bHrCSDjm4DZvm7JVCWKE_HhSEcFHyzSoy0EANP78bhks4J0XHYaBKVXT2yRZMzuHsVOCqN8xHZVGd9CnNYK-Gel8a__LUrHxzxwRVXb3wIJ4xUYbgQiia6q2rGinbNcZR1NCGoR"
            },
            method : "POST"
        };


        fetch(url,other_param)
        .then(data=>{return data.json})
        .then(res=>{console.log(res)})
        .catch(error => {console.log(error)})

        

        console.log(token);
    })
    .catch(function (err) {
        console.log("Denied " + err);

    })

message.onMessage(function (payload) {
    console.log("onMessage: ", payload);
})
