import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import MOOD_OBJECT from '@salesforce/schema/Mood__c';
import MOOD_FIELD from '@salesforce/schema/Mood__c.Mood__c';
import BUTTON_FIELD from '@salesforce/schema/Mood__c.Button_Label__c';

export default class moodTracke2 extends LightningElement {
  @track mood;
  @track buttonLabel;
  @track formSubmitted = false;


  message;

  a1(event){
      this.message=event.target.value;
  }

  handleChange(event) {
    this.mood = event.target.value;
  }

  handleSubmit(event) {
    event.preventDefault();
    const fields = {};
    fields[MOOD_FIELD.fieldApiName] = this.mood;
    fields[BUTTON_FIELD.fieldApiName] = this.buttonLabel;
    const recordInput = { apiName: MOOD_OBJECT.objectApiName, fields };
    createRecord(recordInput).then(() => {
      this.formSubmitted = true;
    }).catch(error => {
      console.error('Error saving mood', error);
    });
  }

  handleButtonClick(event) {
    this.buttonLabel = event.target.value;

    if(event.target.value=='Amazing'){
      this.message='it is amazing, do you want to share with me, why?';
  }
  else if(event.target.value=='Crazy'){
      this.message='it is crazy, do you want to share with me, why?';
  }
  else if(event.target.value=='Normal'){
      this.message='it is normal, do you want to share with me, why?';
  }
  else if(event.target.value=='Not Good'){
      this.message='it is not good, do you want to share with me, why?';
  }
  else if(event.target.value=='Horrible'){
      this.message='it is horrible, do you want to share with me, why?';
  }
  }
}
