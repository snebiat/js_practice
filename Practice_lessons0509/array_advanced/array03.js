'use strict';

/**
Complete the function resetApps such that it empties the apps array it receives as a parameter.

/**
 * @param {array} apps
 */
const resetApps = apps => {
apps.length=0;
return apps;
}

// Sample usage - do not modify
const apps = ["Calculator", "Whatsapp", "Chrome", "Firefox"]
console.log(resetApps(apps));
