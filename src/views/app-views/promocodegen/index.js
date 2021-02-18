import React from 'react'
import { Row, Col, Input, Button, InputNumber, Alert} from 'antd';
import { env } from '../../../configs/EnvironmentConfig'

var apikeys = [
	"heyoo",
	"vafan"
]

var validCatchalls = [
	"catchalls.email",
]

function onChange() {
	var apikey = document.getElementById("apikey").value;
	var catchall = document.getElementById("catchall").value;
	var count = document.getElementById("counter").value;

	if(catchall.includes("@") || !validCatchalls.includes(catchall)){
		alert("Please fill in a valid catchall and try again")
	}else if(apikey == "" || !apikeys.includes(apikey)){
		alert("Please fill in an apikey that is valid and try again")
	}else{
		console.log(env.API_ENDPOINT_URL)
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
