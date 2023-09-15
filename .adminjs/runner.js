const fs = require('fs');
const foldersToCreate = [
    'Customer',
    'Category',
    'Material',
    'Exercise',
    'ExerciseUser',
    'Collaborator',
    'Membership',
    'MembershipAttr',
    'MembershipDesc',
    'TypeNotifications',
    'NotificationAutomaticMessage',
    'Position',
    'Difficulty',
    'JustificationType',
    'Competition',
    'Locality',
    'Country'
];

for (const folderName of foldersToCreate) {
    const folderPath = `./public/uploads/${folderName}`;

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
        console.log(`Created folder: ${folderPath}`);
    } else {
        console.log(`Folder already exists: ${folderPath}`);
    }
}

console.log('Folder check and creation complete.');