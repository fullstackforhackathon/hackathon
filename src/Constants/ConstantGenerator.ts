export function constantGenerator(constant: string): { [x: string]: string } {
    let constants = [`${constant}`, `${constant}_PENDING`, `${constant}_FULFILLED`, `${constant}_REJECTED`];
    return constants.reduce((finalObject, curentName) => ({ ...finalObject, [curentName]: curentName }), {});
}
