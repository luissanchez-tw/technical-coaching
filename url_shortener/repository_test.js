
const Repository = require('./repository');

const repository = new Repository();

describe('repository tests',()=>{

    test('save & retrieve functionality should work',()=>{
        const urlKeyValue={key:'1234', value:'https://www.google.com'};

        repository.save(urlKeyValue.key,urlKeyValue.value);
        const result = repository.findOriginalUrl(urlKeyValue.key);

        expect(result).toBe(urlKeyValue.value);
    })
})