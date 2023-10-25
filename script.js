function copyText(occupation) {
    const text = `    - Proof of  Identity included 
    
    - Proof of Employment included 
    
    [Did the applicant upload a clear and readable photo ID?] -Yes 
    
    [Did the applicant upload a clear and readable proof of employment?] -Yes 
    
    [Does applicant photo ID name match with proof of employment first and last name? ] - Yes 
    
    [Does proof of employment fall within COVID-19 relief dates (March 2020-May 11, 2023)] - Yes  
    
    [If applicable, is Employer Attestation Form needed? ]  - No 
    
    Is the applicant a farmworker, agricultural worker, or meatpacking worker? Yes, ${occupation}
    
    Is the applicant a frontline worker? - Yes 
    
    Is the address on the application supported by the documents received? - Yes 
    
    Please provide a review of applicant circumstance: Was impacted by COVID 
      
    Added name to reviewer signoff field? - Yes  
    
    Next Step - If Complete, update status to Application Complete & send Conditionally Approved message `
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Text has been copied to the clipboard.');
}
