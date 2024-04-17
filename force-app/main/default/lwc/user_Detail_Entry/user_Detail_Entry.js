import { LightningElement , api , track} from 'lwc';

export default class User_Detail_Entry extends LightningElement {
    
    @track userNameVal='Shiyam';
    @api usernameUpdated;

    handleuserName(event){
     this.userNameVal=event.target.value;

    }
    handlePostalCode(event){
        this.postalCodeVal=event.target.value;

    }
    
    handleSubmit(){
        this.usernameUpdated=this.userNameVal;
        console.log('Inside value'+usernameUpdated);
    }

}