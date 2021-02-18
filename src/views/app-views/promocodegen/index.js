/* eslint-disable no-unused-vars */
import React from 'react'
import { Row, Col, Input, Button, InputNumber} from 'antd';
import { env } from '../../../configs/EnvironmentConfig'
var arrays = require("../../../datas")

function onChange() {
	var apikey = document.getElementById("apikey").value;
	var catchall = document.getElementById("catchall").value.toLowerCase();
	var count = document.getElementById("counter").value;

	if(catchall.includes("@") || !arrays[1].includes(catchall)){
		alert("Please fill in a valid catchall and try again")
	}else if(apikey === "" || !arrays[0].includes(apikey)){
		alert("Please fill in an apikey that is valid and try again")
	}else{
		var data = JSON.stringify({"catchall":catchall.toString(),"apikey":apikey.toString(),"count":count});

		var xhr = new XMLHttpRequest();
		xhr.withCredentials = true;

		xhr.addEventListener("readystatechange", function() {
		if(this.readyState === 4) {
			console.log(this.responseText);
		}
		});

		xhr.open("POST", document.location.origin + "/api/gencode");
		xhr.setRequestHeader("Content-Type", "application/json");

		xhr.send(data);
	};
  };

const Promocodegen = () => {
	return (
		<div>
			<Row>
				<Col span={6}>
					Apikey:
				</Col>

				<Col span={18}>
					<Input id="apikey" placeholder="input your apikey" />
				</Col>
    		</Row>
			<Row>
				<Col span={6}>
					Catchall domain:
				</Col>

				<Col span={18}>
					<Input id="catchall" placeholder="input your catchall domain" />
				</Col>
    		</Row>
			<Row>
				<Col span={6}>
					Codes to generate:
				</Col>

				<Col span={3}>
					<InputNumber id="counter" min={1} max={10} defaultValue={10}/>
				</Col>
				<Col span={6}>
					<Button type="primary" onClick={onChange}>
					Generate codes
					</Button>
				</Col>
    		</Row>
		</div>
		
	)
	
}

export default Promocodegen
