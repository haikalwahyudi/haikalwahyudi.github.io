let webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BDekdwUkggY8MSaL50-zAmBttRARMbfgUMR9fgTQxitTjd0AxNtclZ9qMkRCKm9SRC1hJ6s7ONZr9Plk1Izs5_A",
    "privateKey": "as_Lajo6wJY2QAfjUd7aYwFPk0XE-7c3RsYaXKn1ab4"
};


webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
const pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/fKVihABOiQM:APA91bHZ9Cq-DDfGn68x_Tz__yZDJb8HmtiZP98dItxhDt1ROLZgjm5JheiCXa3eJMTMbTOhf9-nWPP8m0uMbefwdtW0AhSm3y2iKaaLSJGqTUbIICZjOV_XLhmZ9wLy5rbO53CnBwjo",
    "keys": {
        "p256dh": "BBAkVAU9dXc3Oddi22DHiGn3HWmEzcuXRHH1Ehlw++thri9OCa5zl67OUIh2YnM1h8tkNulRDLq+ocYj7URYBzI=",
        "auth": "UcZCrOvIVj8LJt61yx1k9w=="
    }
};
const payload = 'Selamat datang di WEB Football Club';

const options = {
    gcmAPIKey: '567908731702',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);