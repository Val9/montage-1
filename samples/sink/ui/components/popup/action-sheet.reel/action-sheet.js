/* <copyright>
Copyright (c) 2012, Motorola Mobility LLC.
All Rights Reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice,
  this list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of Motorola Mobility LLC nor the names of its
  contributors may be used to endorse or promote products derived from this
  software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.
</copyright> */
var Montage = require("montage").Montage;
var Component = require("montage/ui/component").Component;
var Notifier = require("montage/ui/popup/notifier.reel").Notifier;

exports.ActionSheet = Montage.create(Component, {
    hasTemplate: {value: true},

    draw: {
        value: function() {
        }
    },

    // will be set by the popup when it is displayed
    popup: {value: null},

    close: {
        value: function() {
            if(this.popup) {
                this.popup.hide();
            }
        }
    },

    handleEmailAction: {
        value: function(evt) {
            console.log('sent by email');
            Notifier.show('Email sent to user', 2000);
            this.close();
        }
    },
    handleFacebookAction: {
        value: function(evt) {
            console.log('sent by facebook');
            Notifier.show('User sent a message on Facebook', 2000);
            this.close();
        }
    },
    handleTextMessageAction: {
        value: function(evt) {
            console.log('text message');
            Notifier.show('User notified via text message', 2000);
            this.close();
        }
    },
    handleTweetAction: {
        value: function(evt) {
            console.log('sent by twitter');
            Notifier.show('User DMd on Twitter', 2000);
            this.close();
        }
    },
    handleCallAction: {
        value: function(evt) {
            console.log('call');
            Notifier.show('Voice mail left for user', 2000);
            this.close();
        }
    },

    prepareForDraw: {
        value: function() {
            // Invoke Google pretty printer on source code samples
            prettyPrint();
        }
    }

});
