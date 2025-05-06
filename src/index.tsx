import React, { StrictMode } from "react";
import "./public-path";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import App from "./App";

import Login from "./login";
let basename = window.__POWERED_BY_QIANKUN__ ? "/app" : "/";
declare global {
  interface Window {
    __POWERED_BY_QIANKUN__?: boolean;
  }
}
if (!window.__POWERED_BY_QIANKUN__) {
  render({ container: document });
}
export async function bootstrap() {
  console.log("react app bootstraped");
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props: { container: any }) {
  console.log("react app mounted", props);
  render(props);
}
function render(props: { container?: HTMLElement | Document }) {
  const { container } = props,
    el = container!.querySelector("#root");
  const root = createRoot(el!);
  root.render(
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  );
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update() {}
