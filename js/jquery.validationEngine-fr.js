!function(e){e.fn.validationEngineLanguage=function(){},e.validationEngineLanguage={newLang:function(){e.validationEngineLanguage.allRules={required:{regex:"none",alertText:"* Ce champs est requis",alertTextCheckboxMultiple:"* Choisir une option",alertTextCheckboxe:"* Cette option est requise"},minSize:{regex:"none",alertText:"* Minimum ",alertText2:" caracteres requis"},maxSize:{regex:"none",alertText:"* Maximum ",alertText2:" caracteres requis"},groupRequired:{regex:"none",alertText:"* Vous devez remplir un des champs suivant"},min:{regex:"none",alertText:"* Valeur minimum requise "},max:{regex:"none",alertText:"* Valeur maximum requise "},past:{regex:"none",alertText:"* Date antérieure au "},future:{regex:"none",alertText:"* Date postérieure au "},maxCheckbox:{regex:"none",alertText:"* Nombre de choix maximum : excédé"},minCheckbox:{regex:"none",alertText:"* Veuillez choisir ",alertText2:" options"},equals:{regex:"none",alertText:"* Vos champs ne sont pas identiques"},phone:{regex:/^([\+][0-9]{1,3}([\s\.\-])?)?([\(][0-9]{1,6}[\)])?([0-9\s\.\-]{1,32})(([A-Za-z\s\:]{1,11})?[0-9]{1,4}?)$/,alertText:"* Numéro de téléphone invalide"},email:{regex:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,alertText:"* Adresse email invalide"},integer:{regex:/^[\-\+]?\d+$/,alertText:"* Nombre entier invalide"},number:{regex:/^[\-\+]?(([0-9]+)([\.,]([0-9]+))?|([\.,]([0-9]+))?)$/,alertText:"* Nombre flottant invalide"},date:{regex:/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,alertText:"* Date invalide, format YYYY-MM-DD requis"},datefr:{regex:/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/,alertText:"* Date invalide, format DD/MM/YYYY requis"},datetimefr:{regex:/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}\ [0-9]{2}\:[0-9]{2}$/,alertText:"* Date invalide, format DD/MM/YYYY HH:mm requis"},timefr:{regex:/^[0-9]{2}\:[0-9]{2}$/,alertText:"* Horaire invalide, format HH:mm requis"},ipv4:{regex:/^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,alertText:"* Adresse IP invalide"},url:{regex:/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,alertText:"* URL invalide"},onlyNumberSp:{regex:/^[0-9\ ]+$/,alertText:"* Seuls les chiffres sont acceptés"},onlyLetterSp:{regex:/^[a-zA-Z\ \']+$/,alertText:"* Seules les lettres sont acceptées"},onlyLetterNumber:{regex:/^[0-9a-zA-Z]+$/,alertText:"* Aucun caractère spécial n'est accepté"},ajaxUserCall:{url:"ajaxValidateFieldUser",extraData:"name=eric",alertTextLoad:"* Chargement, veuillez attendre",alertText:"* Ce nom est déjà pris"},ajaxNameCall:{url:"ajaxValidateFieldName",alertText:"* Ce nom est déjà pris",alertTextOk:"*Ce nom est disponible",alertTextLoad:"* Chargement, veuillez attendre"},validate2fields:{alertText:"Veuillez taper le mot HELLO"}}}},e.validationEngineLanguage.newLang()}(jQuery);