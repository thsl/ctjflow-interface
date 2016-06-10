$(document).ready(function() {
    $('input.maxlength-simple').maxlength();

    $('input.maxlength-custom-message').maxlength({
        threshold: 10,
        warningClass: "label label-success",
        limitReachedClass: "label label-danger",
        separator: ' de ',
        preText: 'Voce tem ',
        postText: ' caracteres restantes.',
        validate: true
    });

    $('input.maxlength-always-show').maxlength({
        alwaysShow: true
    });

    $('textarea.maxlength-simple').maxlength({
        alwaysShow: true
    });
});
