var example2Left = document.getElementById('example2-left'),
    example2Right = document.getElementById('example2-right');
new Sortable(example2Left, {
    group: 'shared',
    animation: 150
});

new Sortable(example2Right, {
    group: 'shared',
    animation: 150
});