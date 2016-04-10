export default function ({ types }) {
    return {
        visitor: {
            Decorator: {
                enter(path) {
                    let node = path.node;
                    console.log(node.expression.arguments[0].value);
                }
            }
        }
    }
}
