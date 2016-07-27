$(document).ready(function() {
    $('.maxlength-custom-message').maxlength({
        threshold: 20,
        warningClass: "label label-success",
        limitReachedClass: "label label-danger",
        separator: ' de ',
        preText: 'Você já utilizou ',
        postText: ' caracteres disponíveis.',
        validate: true,
        alwaysShow: true
    });
});
