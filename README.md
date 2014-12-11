# mogy-pushover

Pushover notification activity for [mogy](https://github.com/neyric/mogy).

## Installation

In your mogy project, install the dependency using npm :

$ npm install mogy-pushover --save

To register the `pushover` activity to Amazon Simple Workflow :

$ mogy register

## Config

In your mogy environment config file, under the `activities` key, add :

````json
"pushover": {
    "apptoken": "*****"
}
````

And specify your Pushover appToken.

## Sample Decider Usage

````javascript
activity({
    name: 'my-task',
    activity: 'pushover',
    input: {
        userkey: 'user token to send to',
        title: 'Test message',
        msg: 'Hi ! This message was sent by a mogy app !'
    }
})
````
