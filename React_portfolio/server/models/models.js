import { set, connect } from 'mongoose';

const DB = `mongodb+srv://noothanam:noothanam@cluster0.ieyhv3b.mongodb.net/?retryWrites=true&w=majority`
set('strictQuery', true);
connect(DB, {
}).then(() => {
    console.log(`connnection successful`);
}).catch((err) => console.log(`no connection`));