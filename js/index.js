(function() {
  var app = angular.module('student', ['ngMaterial']);
  app.controller('FormController', function(){
    this.student = {};
    
    this.showStudent = false;
    
    this.today = new Date();
    
    this.degrees = ['B.Tech', 'M.Tech', 'BCA', 'MCA', 'B.Sc', 'M.Sc',
                   'BA', 'MA'];
    
    this.states = ['Uttar Pradesh', 'Maharashtra', 'Bihar', 'West Bengal',
                  'Madhya Pradesh', 'Tamil Nadu', 'Rajasthan', 'Karnataka',
                  'Gujarat', 'Andhra Pradesh', 'Odisha', 'Telangana',
                   'Kerala', 'Jharkhand', 'Assam', 'Punjab', 'Chhattisgarh',
                  'Haryana', 'Jammu and Kashmir', 'Uttarakhand', 'Himachal Pradesh',
                  'Tripura', 'Meghalaya', 'Manipur', 'Nagaland', 'Goa', 'Arunachal Pradesh',
                  'Mizoram', 'Sikkim', 'Delhi', 'Puducherry', 'Chandigarh', 
                   'Andaman and Nicobar Islands', 'Dadra and Nagar Haveli', 'Daman and Diu',
                  'Lakshadweep'];
    
    this.reset = function(){
      this.student = {};
      this.showStudent = false;
    }
    
    this.submit = function(){
      this.showStudent = true;
    }
    
    this.back = function(){
      this.showStudent = false;
    }
    
  });
  
})();