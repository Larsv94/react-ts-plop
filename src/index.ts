import { NodePlopAPI, PlopCfg } from 'plop';
module.exports = function (plop: NodePlopAPI, config: PlopCfg) {
    plop.setGenerator('test', {
        description: 'this is a test generator',
        prompts: [], // array of inquirer prompts
        actions: [{
            type: 'add',
            template: '{{cwd}}',
            path: './test.txt',
            force: config.force,
            abortOnFail: true,
            data: {},
        }]
    });
};