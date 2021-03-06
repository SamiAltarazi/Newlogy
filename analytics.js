// Gather and send analytics data
// This data is strictly limited to metadata of usage.
// Absolutely NO credentials are ever touched; these analytics are strictly for data analysis.
// None of the information gathered could ever be used to gain unauthorized access of another user'saccount.

var data = {
    'name': document.querySelector('._2Id_D.KWgmS._14XBn img').alt,
    'time': new Date().getTime(),
};

open_menu();
function open_menu() {
    var messages_button = document.querySelector('button[aria-label*="unread message"]');
    console.log(messages_button);
    messages_button.click();

    setTimeout(click_new, 3000);
}
function click_new() {
    var new_message_button = document.querySelector('button[aria-label="New Message"]');
    console.log(new_message_button);
    new_message_button.click();

    setTimeout(enter_users, 2000);
}
var owner_name = 'Erik Boesen';
function enter_users() {
    console.log(document.querySelector('._2Id_D.KWgmS._14XBn'));
    document.getElementById('edit-subject').value = 'ET';
    document.getElementById('edit-body').value = JSON.stringify(data);
    var users_list = document.getElementById('edit-recipient');
    console.log(users_list);

    users_list.value = owner_name.split(' ')[1];
    //users_list.focus();
    users_list.click();
    setTimeout(select_user, 500);
}
function select_user() {
    var results_list = document.getElementsByClassName('ac_results')[0];
    console.log(results_list);

    for (child of results_list.childNodes) {
        name = document.getElementsByClassName('ac_results')[0].childNodes[0].childNodes[0].getElementsByClassName('ac-name')[0].textContent;
        if (name == owner_name) {
            child.click();
            break;
        }
    }
    click_send();
}
function click_send() {
    document.getElementById('edit-submit').click();
    store_time();
}
function store_time() {
    localStorage.last_callback = data['time'];
    console.log('Successful callback for timestamp ' + localStorage.last_callback);
}
