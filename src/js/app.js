/* global $ */
console.log(process.env.NODE_ENV);
console.log(process.env.API_NAME);
$(() => {
    console.log('entry');
    $('.box').html(Math.random().toFixed(5));
});
