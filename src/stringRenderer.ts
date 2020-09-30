// @ts-ignore
import {INode, stringify} from 'svgson';
import {Ast} from '../types';

const stringRenderer = (ast: Ast) => {
  if (ast.attributes.style !== undefined) delete ast.attributes.style;
  return stringify(<INode>ast);
};

export default stringRenderer;
