import { Component, OnInit } from '@angular/core';
import {Paho} from 'mqttws31'

@Component({
    selector: 'mqtt',
    template: `
        <h1>message : {{message }}</h1>
    `
})
export class mqtt implements OnInit  {
    private _client: Paho.MQTT.Client;
    message: any = {};



    public ngOnInit() {
        this._client = new Paho.MQTT.Client("iot.eclipse.org", Number(80),'/ws', "myclientid_");

        console.log(this._client);

        this._client.onConnectionLost = (responseObject: Object) => {
            console.log(responseObject);
            console.log('Connection lost.');
        };

        this._client.onMessageArrived = (message: Paho.MQTT.Message) => {
            console.log('Message arrived.');
            let mes: any = message.payloadString;
            console.log(mes);
            if(mes !== 'offline'){
                mes = JSON.parse(message.payloadString);
                for(let i in mes) this.message[i] = mes[i];
                console.log(this.message);
            }else {
                console.log('MQTT is offline');
            }
        };

        this._client.connect({ onSuccess: this.onConnected.bind(this) });
    }

    private onConnected():void {
        console.log('Connected to broker.');
        this._client.subscribe('sdf654sdf/#')
    }
}