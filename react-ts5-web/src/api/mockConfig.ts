import Mock from "mockjs";
Mock.setup({
  timeout:3000
})

export type ArrayElementType<T> = T extends (infer U)[] ? U :any;




export const mock = Mock;