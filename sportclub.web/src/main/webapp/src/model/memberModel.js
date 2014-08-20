/* ========================================================================
 * Copyright 2014 monitor
 *
 * Licensed under the MIT, The MIT License (MIT)
 * Copyright (c) 2014 monitor

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 * ========================================================================


Source generated by CrudMaker version 1.0.0.201408112050

*/
define(['model/_memberModel'], function() {
    App.Model.MemberModel = App.Model._MemberModel.extend({

 	validate: function(attrs,options){
            var validationMessage = "";
            if(!attrs.name){
                validationMessage = "El nombre no puede ser vac�o.";
            }
            var fechaActual= new Date();
            if(!attrs.name){
                validationMessage = "The name can't be empty.";
            }
            if(!attrs.firstName){
                validationMessage = "The first name can't be empty.";
            }
            if(!attrs.lastName){
                validationMessage = "The last namecan't be empty.";
            }
            if(!attrs.birthDate){
                validationMessage = "The birth date can't be empty.";
            }
            if(!attrs.docNumber){
                validationMessage = "The document number can't be empty.";
            }
            if(!attrs.documenttypeId){
                validationMessage = "The document type can't be empty.";
            }
            if(!attrs.partnerId){
                validationMessage = "The partner's id can't be empty.";
            }
            if(attrs.docNumber.length<5)
            {
                validationMessage= "The document number must be more than 5 characters long";
            }
            if(!attrs.birthDate<fechaActual)
            {
                validationMessage= "The birth date cannot be today nor in the future";
            }
            if(fechaActual.getFullYear()-100 > attrs.birthDate.getFullYear())
            {
                validationMessage= "You cannot be over a hundred years old";
            }
            if(validationMessage.length>0){
               return validationMessage;
            }
        }

    });

    App.Model.MemberList = App.Model._MemberList.extend({
        model: App.Model.MemberModel
    });

    return  App.Model.MemberModel;

});
