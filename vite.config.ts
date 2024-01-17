import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "react-useful-common-components",
      fileName: "react-useful-common-components",
    },
    rollupOptions: {
      /**
       * @description
       * external: ["react", "react-dom"] 부분은 Rollup에게 "react"와 "react-dom"은 이 패키지 내부에서 직접 관리하지 않고, 패키지를 사용하는 프로젝트에서 제공할 것이라고 알려줍니다.
       *  즉, 이 패키지의 번들에는 "react"와 "react-dom"이 포함되지 않습니다.
       */
      external: ["react", "react-dom"],
      /**
       * @description
       * output: { globals: { react: "React", "react-dom": "ReactDOM" } } 부분은 빌드된 결과물에서 "react"와 "react-dom"이 전역 변수 "React"와 "ReactDOM"을 참조하도록 지시합니다.
       * 이는 외부에서 제공되는 "react"와 "react-dom" 인스턴스를 사용하도록 합니다.
       */
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    // commonjsOptions: {
    //   esmExternals: ["react"],
    // },
  },
  plugins: [dts(), react()],
});
