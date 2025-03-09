import commandIndex from '../commands/commandIndex';

export default commandIndex.map(c => ({ name: c.name, description: c.description, options: c.options }))