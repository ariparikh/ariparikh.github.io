var ourClass = [
    {
        name: 'Chandler',
        role: 'Instructor',
    },
    {
        name: 'Matt',
        role: 'Student',
    },
    {
        name: 'Rachel',
        role: 'Student',
    },
    {
        name: 'Ari',
        role: 'Student',
    },
    {
        name: 'Rish',
        role: 'Student',
    },
    {
        name: 'Jessie',
        role: 'Student',
    },
    {
        name: 'Yogi',
        role: 'Student',
    },
    {
        name: 'Lewis',
        role: 'Student',
    },
    {
        name: 'Sino',
        role: 'Student',
    },
    {
        name: 'Desmond',
        role: 'Student',
    },
]

// ourClass.forEach(function(person) {
//     $('#class-list')
//         .append('<h4>' + person.name + '</h4>')
//         .append('<h6>' + person.role + '</h6>')
//         .append('<hr/>')
// })

// 2. find the template's source
var source = $('#person-template').html()
// turn source into Handlebar's template
var template = Handlebars.compile(source)

// 3 generate HTMLusing the compiled Handlebar's template
var classTemplate = template(ourClass)

// 4 append the generated HTML into the DOM
$('#class-list').append(classTemplate)



