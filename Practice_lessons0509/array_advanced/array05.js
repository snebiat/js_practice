'use strict';

/**
Complete the function removeSecondApp such that it removes the second element from the apps array it receives and returns the new array (which should not contain the item that was removed).

/**
 * @param {array} apps
 */
const removeSecondApp = apps => {
    apps.splice(1,1);
    const newarray =  apps;
    return newarray;
}

// Sample usage
const apps = ["Calculator", "Whatsapp", "Chrome", "Firefox"]
console.log(removeSecondApp(apps)); // ["Calculator", "Chrome", "Firefox"]
