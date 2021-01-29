const today = new Date()
const at = hours => today.setHours(hours, 0)

export const sampleAppointments = [
    {startsAt: at(9), customer: {firstName: 'Charlie', lastName: 'Day', phoneNumber: '555-1234', stylist: 'Maggie', service: 'Trim', notes: 'Lorem ipsum'}},
    {startsAt: at(10), customer: {firstName: 'Frankie', lastName: 'Moon', phoneNumber: '555-1234', stylist: 'Maggie', service: 'Trim', notes: 'Lorem ipsum'}},
    {startsAt: at(11), customer: {firstName: 'Casey', lastName: 'Affleck', phoneNumber: '555-1234', stylist: 'Maggie', service: 'Trim', notes: 'Lorem ipsum'}},
    {startsAt: at(12), customer: {firstName: 'Ashley', lastName: 'Jordan', phoneNumber: '555-1234', stylist: 'Maggie', service: 'Trim', notes: 'Lorem ipsum'}},
    {startsAt: at(13), customer: {firstName: 'Jordan', lastName: 'Cox'}},
    {startsAt: at(14), customer: {firstName: 'Jay', lastName: 'Leno'}},
    {startsAt: at(15), customer: {firstName: 'Alex', lastName: 'Garland'}},
    {startsAt: at(16), customer: {firstName: 'Jules', lastName: 'Verne'}},
    {startsAt: at(17), customer: {firstName: 'Stevie', lastName: 'Wonder'}}
]