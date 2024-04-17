// employeeForm.js
//Shiyam making the chanegs for github changes
import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class EmployeeForm extends LightningElement {
    name = '';
    cityVal = '';

    handleNameChange(event) {
        this.name = event.target.value;
    }

    handleCityChange(event) {
        this.cityVal = event.target.value;
    }

    saveEmployee() {
        const fields = {
            'Name': this.name,
            'City__c': this.cityVal
        };

        const recordInput = { apiName: 'Employee__c', fields };

        createRecord(recordInput)
            .then(employee => {
                console.log('Employee created with ID: ' + employee.id);
                // Reset form fields
                this.name = '';
                this.cityVal = '';
            })
            .catch(error => {
                console.error('Error creating employee: ' + error.body.message);
            });
    }
}