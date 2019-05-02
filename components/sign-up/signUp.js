function SignUpController() {
    var ctrl = this;
}
  
  angular.module('MySite').component('signUp', {
    template: `
    <section id="sign-up">
        <h3>Sign Up</h3>

            <h4>Create Your Profile</h4>
     <fieldset>
       <legend>
         Your Details:
       </legend>
       <br />

       <label>Username:
         <input type="text" name="username" size="30" maxlength="100"/>
       </label>
       <br />
       <br />
       <label>Password:
         <input type="password" name="password" size="30" maxlength="100"/>
       </label>
       <br />
       <br />
       <label>Confirm Password:
         <input type="password" name="password" size="30" maxlength="100"/>
       </label>
       <br />
       <br />
       <label>
         First Name:
         <input type="text" name="firstname" size="30" maxlength="100"
       </label>
       <br />
       <br />
       <label>
         Last Name:
         <input type="text" name="lastname" size="30" maxlength="100"
       </label>
       <br />
       <br />
       <label>
         Email:
         <input type="text" name="email" size="30" maxlength="100"
       </label>
       <br />
       <br />
       <label>
         Phone Number:
         <input type="text" name="phonenumber" size="30" maxlength="100"
       </label>
       <br />
       <br />
       <label>
         Company Name:
         <input type="text" name="companyname" size="30" maxlength="100"
       </label>
       <br />
       <br />
       <label>
         Street Address:
         <input type="text" name="streetaddress" size="30" maxlength="100"
       </label>
       <br />
       <br />
       <label>
         City:
         <input type="text" name="city" size="30" maxlength="100"
       </label>
       <label>
         St:
         <input type="text" name="st" size="5" maxlength="2"
       </label>
       <label>
         Zip:
         <input type="text" name="zip" size="10" maxlength="20"
       </label>
       <br />
       <br />
       <label>
         Company Phone Number:
         <input type="text" name="companyphonenumber" size="30" maxlength="100"
       </label>
       <br />
       <br />
       <button id="submit">SUBMIT</button>

     </fieldset>
            
    </section>`, // or use templateUrl
    controller: SignUpController
  });