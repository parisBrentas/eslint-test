import { useCookies } from "react-cookie";
import { FC } from "react";

import { TestSDK } from "@testlib/sublib";

export const SDKProvider: FC = () => {
  const [ ,setCookie ] = useCookies();
  const test = new TestSDK("print me");
  setCookie("my_cookie", test.getMyString());
  return (<span>{ test.getMyString() }</span>);
};
