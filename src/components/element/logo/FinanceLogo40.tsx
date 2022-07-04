import React, { useCallback } from "react";
import { LogoProps } from "./LogoConstant";

export const FinanceLogo40: React.FC<LogoProps> = (props) => {
  const { type = "static", onClick } = props;

  const handleClick = useCallback(
    (ev: React.MouseEvent) => {
      if (type === "button") {
        onClick?.(ev);
        return;
      }
    },
    [type, onClick]
  );

  return (
    <svg
      onClick={handleClick}
      className={`${type === "button" ? "cursor-pointer" : ""}`}
      width={176}
      height={41}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M45.506 32.809v-14.02h-2.45v-3.857h2.45v-2.09c0-2.163.54-3.701 1.622-4.614 1.105-.913 2.595-1.37 4.47-1.37h1.982v3.929h-1.262c-.793 0-1.357.156-1.694.468-.336.313-.504.841-.504 1.586v2.09h11.533V32.81H57.04v-14.02h-6.92v14.02h-4.614Zm13.877-20.436c-.841 0-1.538-.253-2.09-.757-.53-.505-.794-1.142-.794-1.91 0-.77.264-1.394.793-1.875.553-.504 1.25-.757 2.09-.757.842 0 1.526.253 2.055.757.553.48.829 1.106.829 1.875 0 .768-.276 1.405-.83 1.91-.528.504-1.212.757-2.053.757Zm7.152 20.436V14.932h4.073l.36 3.027a6.323 6.323 0 0 1 2.379-2.523c1.057-.624 2.295-.937 3.712-.937 2.21 0 3.929.697 5.154 2.09 1.226 1.394 1.839 3.437 1.839 6.128v10.092h-4.614v-9.66c0-1.538-.312-2.715-.937-3.532-.625-.817-1.598-1.225-2.92-1.225-1.297 0-2.366.456-3.207 1.37-.817.912-1.226 2.186-1.226 3.82v9.227h-4.613Zm28.091.432c-1.538 0-2.8-.24-3.784-.72-.985-.505-1.718-1.166-2.199-1.983a5.233 5.233 0 0 1-.72-2.703c0-1.658.648-3.004 1.946-4.037 1.297-1.033 3.243-1.55 5.838-1.55h4.542v-.432c0-1.226-.349-2.127-1.045-2.703-.697-.577-1.562-.866-2.595-.866-.938 0-1.754.229-2.451.685-.697.433-1.13 1.082-1.298 1.947h-4.505c.12-1.298.552-2.427 1.297-3.388.77-.962 1.754-1.694 2.956-2.199 1.201-.529 2.547-.793 4.037-.793 2.547 0 4.553.637 6.019 1.91 1.465 1.274 2.198 3.076 2.198 5.407v10.993h-3.928l-.433-2.884a6.609 6.609 0 0 1-2.235 2.379c-.937.625-2.15.937-3.64.937Zm1.045-3.604c1.322 0 2.343-.433 3.064-1.298.745-.865 1.213-1.934 1.406-3.207h-3.929c-1.225 0-2.102.228-2.631.684-.529.433-.793.974-.793 1.622 0 .697.264 1.238.793 1.622.529.385 1.225.577 2.09.577Zm13.594 3.172V14.932h4.072l.361 3.027a6.32 6.32 0 0 1 2.379-2.523c1.057-.624 2.294-.937 3.712-.937 2.211 0 3.929.697 5.154 2.09 1.226 1.394 1.838 3.437 1.838 6.128v10.092h-4.613v-9.66c0-1.538-.313-2.715-.937-3.532-.625-.817-1.598-1.225-2.92-1.225-1.297 0-2.366.456-3.207 1.37-.817.912-1.226 2.186-1.226 3.82v9.227h-4.613Zm30.686.432c-1.826 0-3.436-.396-4.83-1.19a8.792 8.792 0 0 1-3.316-3.315c-.792-1.418-1.189-3.04-1.189-4.866 0-1.826.397-3.448 1.189-4.866a8.794 8.794 0 0 1 3.316-3.316c1.394-.792 3.004-1.189 4.83-1.189 2.283 0 4.205.6 5.767 1.802 1.562 1.178 2.559 2.812 2.991 4.902h-4.865c-.241-.865-.721-1.538-1.442-2.018-.697-.505-1.526-.757-2.487-.757-1.274 0-2.355.48-3.244 1.441-.889.962-1.333 2.295-1.333 4.001 0 1.706.444 3.04 1.333 4 .889.962 1.97 1.442 3.244 1.442.961 0 1.79-.24 2.487-.72.721-.48 1.201-1.166 1.442-2.055h4.865c-.432 2.019-1.429 3.64-2.991 4.866-1.562 1.225-3.484 1.838-5.767 1.838Zm21.539 0c-1.802 0-3.4-.384-4.793-1.153a8.346 8.346 0 0 1-3.28-3.244c-.793-1.394-1.19-3.004-1.19-4.83 0-1.85.385-3.496 1.154-4.938.793-1.441 1.874-2.559 3.244-3.351 1.393-.817 3.027-1.226 4.901-1.226 1.754 0 3.304.385 4.65 1.153a8.116 8.116 0 0 1 3.135 3.172c.769 1.322 1.154 2.8 1.154 4.433 0 .265-.012.541-.036.83 0 .288-.012.588-.036.9h-13.588c.096 1.394.576 2.487 1.441 3.28.889.793 1.959 1.19 3.208 1.19.937 0 1.718-.205 2.343-.613a3.99 3.99 0 0 0 1.442-1.658h4.685a8.524 8.524 0 0 1-1.694 3.1c-.769.913-1.73 1.634-2.883 2.162-1.13.529-2.415.793-3.857.793Zm.036-14.994c-1.129 0-2.126.325-2.991.974-.865.624-1.418 1.585-1.658 2.883h8.902c-.072-1.177-.504-2.114-1.297-2.811-.793-.697-1.778-1.046-2.956-1.046Z"
        fill="currentColor"
      />
      <path
        d="M45.506 32.809h-.58v.58h.58v-.58Zm0-14.02h.581v-.582h-.58v.581Zm-2.45 0h-.581v.58h.58v-.58Zm0-3.857v-.581h-.581v.58h.58Zm2.45 0v.58h.581v-.58h-.58Zm1.622-6.704-.37-.448-.005.004.375.444Zm6.452-1.37h.58v-.58h-.58v.58Zm0 3.929v.58h.58v-.58h-.58Zm-2.956.468-.395-.425.395.425Zm-.504 3.677h-.581v.58h.58v-.58Zm11.533 0h.581v-.581h-.58v.58Zm0 17.877v.58h.581v-.58h-.58Zm-4.613 0h-.581v.58h.58v-.58Zm0-14.02h.58v-.582h-.58v.581Zm-6.92 0v-.582h-.581v.581h.58Zm0 14.02v.58h.58v-.58h-.58Zm7.172-21.193-.401.42.01.009.391-.43Zm0-3.785.39.43h.002l-.392-.43Zm4.145 0-.401.42.01.01.01.009.38-.439Zm0 3.785-.392-.43-.01.01.402.42Zm-15.35 21.193v-14.02h-1.162v14.02h1.162Zm-.58-14.602h-2.452v1.162h2.451v-1.162Zm-1.87.581v-3.856h-1.163v3.856h1.162Zm-.582-3.276h2.451v-1.161h-2.45v1.161Zm3.032-.58v-2.09h-1.162v2.09h1.162Zm0-2.09c0-2.083.522-3.415 1.416-4.17l-.75-.888c-1.268 1.071-1.828 2.815-1.828 5.057h1.162Zm1.411-4.166c.973-.804 2.318-1.237 4.1-1.237V6.277c-1.968 0-3.602.48-4.84 1.503l.74.896Zm4.1-1.237h1.982V6.277h-1.983V7.44Zm1.4-.58v3.928h1.163V6.858h-1.162Zm.582 3.347h-1.262v1.162h1.262v-1.162Zm-1.262 0c-.841 0-1.59.16-2.089.624l.79.851c.174-.161.555-.313 1.3-.313v-1.162Zm-2.089.624c-.51.474-.69 1.202-.69 2.011H50.7c0-.68.158-1.01.32-1.16l-.791-.851Zm-.69 2.011v2.09H50.7v-2.09H49.54Zm.58 2.671h11.534v-1.161H50.12v1.161Zm10.953-.58v17.877h1.162V14.932h-1.162Zm.581 17.296H57.04v1.161h4.613v-1.161Zm-4.032.58v-14.02h-1.162v14.02h1.162Zm-.581-14.6h-6.92v1.161h6.92v-1.162Zm-7.501.58v14.02H50.7v-14.02H49.54Zm.58 13.44h-4.613v1.161h4.614v-1.161Zm9.264-20.436c-.716 0-1.267-.21-1.7-.605l-.783.858c.674.614 1.516.909 2.483.909v-1.162Zm-1.69-.596c-.407-.39-.613-.871-.613-1.49h-1.162c0 .918.323 1.71.973 2.33l.802-.84Zm-.613-1.49c0-.62.205-1.083.603-1.445l-.782-.86c-.66.6-.983 1.386-.983 2.305h1.162Zm.604-1.446c.432-.394.983-.605 1.699-.605V6.494c-.967 0-1.81.294-2.483.908l.784.858Zm1.699-.605c.715 0 1.249.21 1.653.596l.802-.84c-.653-.623-1.49-.917-2.456-.917v1.161Zm1.673.615c.419.364.63.825.63 1.436h1.16c0-.928-.341-1.716-1.028-2.313l-.762.877Zm.63 1.436c0 .61-.212 1.09-.64 1.48l.783.859c.676-.618 1.018-1.412 1.018-2.34h-1.162Zm-.65 1.49c-.404.385-.938.596-1.654.596v1.162c.967 0 1.803-.295 2.456-.918l-.802-.84Zm5.499 21.613h-.58v.58h.58v-.58Zm0-17.877v-.581h-.58v.58h.58Zm4.073 0 .576-.069-.06-.512h-.516v.58Zm.36 3.027-.577.069.222 1.864.87-1.664-.515-.269Zm2.379-2.523-.296-.5-.005.003.3.497Zm8.866 1.154-.436.383.436-.383Zm1.839 16.219v.58h.58v-.58h-.58Zm-4.614 0h-.58v.58h.58v-.58Zm-.937-13.192.461-.353-.461.353Zm-6.127.144-.427-.393-.006.006.433.387ZM71.148 32.81v.58h.581v-.58h-.58Zm-4.032 0V14.932h-1.162v17.877h1.162Zm-.581-17.296h4.073V14.35h-4.073v1.161ZM70.031 15l.36 3.028 1.154-.137-.36-3.028L70.03 15Zm1.452 3.228a5.741 5.741 0 0 1 2.164-2.295l-.6-.994a6.902 6.902 0 0 0-2.594 2.751l1.03.538Zm2.16-2.292c.954-.564 2.086-.856 3.416-.856v-1.162c-1.505 0-2.848.333-4.008 1.018l.591 1Zm3.416-.856c2.079 0 3.624.649 4.718 1.893l.873-.767c-1.357-1.543-3.248-2.288-5.59-2.288v1.162Zm4.718 1.893c1.098 1.249 1.694 3.131 1.694 5.744h1.161c0-2.77-.63-4.972-1.983-6.511l-.872.767Zm1.694 5.744v10.092h1.161V22.717h-1.161Zm.58 9.51h-4.613v1.163h4.614v-1.162Zm-4.032.582v-9.66h-1.162v9.66h1.162Zm0-9.66c0-1.605-.324-2.927-1.057-3.885l-.922.706c.517.676.817 1.709.817 3.18h1.162Zm-1.057-3.885c-.764-1-1.934-1.453-3.38-1.453v1.162c1.197 0 1.973.363 2.458.997l.922-.706Zm-3.38-1.453c-1.452 0-2.679.518-3.635 1.557l.854.787c.726-.788 1.637-1.182 2.78-1.182V17.81Zm-3.641 1.563c-.94 1.05-1.374 2.48-1.374 4.208h1.162c0-1.54.384-2.658 1.078-3.433l-.866-.775Zm-1.374 4.208v9.227h1.162v-9.227h-1.162Zm.581 8.646h-4.613v1.161h4.613v-1.161Zm19.694.292-.265.517.01.005.255-.522Zm-2.199-1.982-.5.294.5-.294Zm1.226-6.74.362.454-.362-.454Zm10.38-1.55v.581h.581v-.58h-.581Zm-1.045-3.136.37-.447-.37.448Zm-5.046-.18.306.494.006-.004.006-.004-.318-.486ZM92.86 20.88v.58h.479l.091-.47-.57-.11Zm-4.505 0-.579-.054-.058.634h.637v-.58Zm1.297-3.388-.453-.363-.006.007.46.356Zm2.956-2.199.225.536.009-.004-.234-.532Zm10.056 1.117-.381.439.381-.439Zm2.198 16.4v.58h.581v-.58h-.581Zm-3.928 0-.575.086.074.494h.501v-.58Zm-.433-2.884.575-.086-.255-1.7-.829 1.506.509.28Zm-2.235 2.379-.316-.487-.006.004.322.483Zm.469-3.965-.44-.379-.006.008.446.371Zm1.406-3.207.574.086.101-.667h-.675v.58Zm-6.56.684.368.45.006-.005.006-.005-.38-.44Zm0 3.244.342-.47-.342.47Zm1.045 3.6c-1.483 0-2.649-.232-3.53-.662l-.509 1.044c1.09.532 2.447.78 4.04.78V32.66Zm-3.52-.657c-.903-.463-1.546-1.053-1.962-1.76l-1.001.59c.545.927 1.367 1.658 2.434 2.204l.53-1.034Zm-1.962-1.76a4.652 4.652 0 0 1-.64-2.408H87.34c0 1.084.266 2.088.802 2.997l1-.589Zm-.64-2.408c0-1.481.567-2.66 1.727-3.583l-.724-.908C88.07 24.487 87.34 26 87.34 27.834h1.162Zm1.727-3.583c1.15-.916 2.943-1.423 5.477-1.423v-1.162c-2.657 0-4.757.527-6.201 1.677l.724.908Zm5.477-1.423h4.541v-1.162h-4.541v1.162Zm5.122-.58v-.433h-1.162v.432h1.162Zm0-.433c0-1.334-.383-2.428-1.256-3.15l-.74.894c.52.43.834 1.138.834 2.256h1.162Zm-1.256-3.15c-.816-.676-1.817-1-2.965-1v1.162c.918 0 1.646.254 2.224.732l.74-.895Zm-2.965-1c-1.036 0-1.967.254-2.77.78l.637.972c.59-.387 1.294-.59 2.133-.59v-1.161Zm-2.758.773c-.845.524-1.364 1.318-1.561 2.329l1.14.221c.14-.72.486-1.223 1.034-1.563l-.613-.987Zm-.99 1.859h-4.506v1.162h4.505v-1.162Zm-3.928.634c.111-1.195.506-2.218 1.178-3.085l-.918-.712c-.817 1.055-1.287 2.29-1.416 3.69l1.156.107Zm1.173-3.078c.705-.881 1.61-1.557 2.727-2.026l-.45-1.071c-1.285.54-2.351 1.33-3.184 2.37l.907.727Zm2.736-2.03c1.118-.492 2.383-.744 3.803-.744v-1.162c-1.56 0-2.987.277-4.271.842l.468 1.064Zm3.803-.744c2.451 0 4.307.612 5.638 1.768l.762-.877c-1.601-1.39-3.758-2.053-6.4-2.053v1.162Zm5.638 1.768c1.313 1.14 1.998 2.768 1.998 4.968h1.162c0-2.462-.78-4.44-2.398-5.845l-.762.877Zm1.998 4.968v10.993h1.162V21.816h-1.162Zm.581 10.412h-3.928v1.161h3.928v-1.161Zm-3.354.494-.432-2.883-1.15.172.433 2.884 1.149-.173Zm-1.516-3.077a6.03 6.03 0 0 1-2.042 2.172l.633.974a7.192 7.192 0 0 0 2.427-2.586l-1.018-.56Zm-2.048 2.176c-.815.543-1.906.84-3.318.84v1.161c1.568 0 2.904-.329 3.963-1.035l-.645-.966Zm-2.273-1.603c1.461 0 2.66-.486 3.51-1.507l-.892-.743c-.591.709-1.435 1.088-2.618 1.088v1.162Zm3.504-1.5c.825-.958 1.334-2.132 1.54-3.5l-1.149-.173c-.178 1.18-.606 2.143-1.271 2.915l.88.758Zm.966-4.167h-3.929v1.162h3.929V24.55Zm-3.929 0c-1.27 0-2.322.23-3.01.826l.759.879c.368-.318 1.07-.544 2.251-.544v-1.161Zm-2.999.816c-.655.536-1.006 1.238-1.006 2.071h1.162c0-.464.178-.843.58-1.172l-.736-.9Zm-1.006 2.071c0 .869.342 1.59 1.032 2.092l.684-.94c-.367-.267-.554-.626-.554-1.152h-1.162Zm1.032 2.092c.656.477 1.484.688 2.432.688v-1.162c-.781 0-1.347-.174-1.748-.466l-.684.94Zm16.026 3.279h-.581v.58h.581v-.58Zm0-17.877v-.581h-.581v.58h.581Zm4.072 0 .577-.069-.061-.512h-.516v.58Zm.361 3.027-.577.069.222 1.864.87-1.664-.515-.269Zm2.379-2.523-.296-.5-.005.003.301.497Zm8.866 1.154-.436.383.436-.383Zm1.838 16.219v.58h.581v-.58h-.581Zm-4.613 0h-.581v.58h.581v-.58Zm-.937-13.192.461-.353-.461.353Zm-6.127.144-.428-.393-.005.006.433.387Zm-1.226 13.048v.58h.581v-.58h-.581Zm-4.032 0V14.932h-1.162v17.877h1.162Zm-.581-17.296h4.072V14.35h-4.072v1.161Zm3.496-.513.36 3.028 1.154-.137-.361-3.028-1.153.137Zm1.452 3.228a5.738 5.738 0 0 1 2.164-2.295l-.601-.994a6.906 6.906 0 0 0-2.593 2.751l1.03.538Zm2.159-2.292c.955-.564 2.087-.856 3.417-.856v-1.162c-1.505 0-2.848.333-4.008 1.018l.591 1Zm3.417-.856c2.079 0 3.624.649 4.718 1.893l.872-.767c-1.357-1.543-3.247-2.288-5.59-2.288v1.162Zm4.718 1.893c1.098 1.249 1.693 3.131 1.693 5.744h1.162c0-2.77-.63-4.972-1.983-6.511l-.872.767Zm1.693 5.744v10.092h1.162V22.717H126.2Zm.581 9.51h-4.613v1.163h4.613v-1.162Zm-4.032.582v-9.66h-1.162v9.66h1.162Zm0-9.66c0-1.605-.325-2.927-1.057-3.885l-.923.706c.518.676.818 1.709.818 3.18h1.162Zm-1.057-3.885c-.765-1-1.935-1.453-3.381-1.453v1.162c1.197 0 1.974.363 2.458.997l.923-.706Zm-3.381-1.453c-1.451 0-2.678.518-3.635 1.557l.855.787c.725-.788 1.637-1.182 2.78-1.182V17.81Zm-3.64 1.563c-.941 1.05-1.374 2.48-1.374 4.208h1.162c0-1.54.384-2.658 1.077-3.433l-.865-.775Zm-1.374 4.208v9.227h1.162v-9.227h-1.162Zm.581 8.646h-4.613v1.161h4.613v-1.161Zm21.243-.176.288-.505-.288.505Zm-3.316-3.316-.507.283.004.007.503-.29Zm0-9.732-.503-.29-.003.007.506.283Zm3.316-3.316.288.505-.288-.505Zm10.597.613-.354.46.004.004.35-.464Zm2.991 4.902v.58h.714l-.145-.698-.569.118Zm-4.865 0-.56.155.118.426h.442v-.581Zm-1.442-2.018-.341.47.009.007.01.006.322-.483Zm-5.731.684-.426-.394.426.394Zm0 8.002.427-.395-.427.395Zm5.731.72-.322-.483-.008.005.33.479Zm1.442-2.054v-.58h-.445l-.116.429.561.151Zm4.865 0 .568.122.151-.703h-.719v.581Zm-2.991 4.866-.359-.457.359.457Zm-5.767 1.257c-1.74 0-3.248-.377-4.542-1.113l-.575 1.01c1.493.849 3.204 1.265 5.117 1.265V32.66Zm-4.542-1.113a8.203 8.203 0 0 1-3.1-3.101l-1.007.58a9.376 9.376 0 0 0 3.532 3.53l.575-1.01Zm-3.097-3.095c-.738-1.32-1.115-2.843-1.115-4.582h-1.162c0 1.913.416 3.635 1.264 5.15l1.013-.568Zm-1.115-4.582c0-1.74.377-3.261 1.115-4.582l-1.013-.567c-.848 1.514-1.264 3.236-1.264 5.15h1.162Zm1.112-4.576a8.203 8.203 0 0 1 3.1-3.1l-.575-1.01a9.375 9.375 0 0 0-3.532 3.53l1.007.58Zm3.1-3.1c1.294-.737 2.802-1.114 4.542-1.114v-1.162c-1.913 0-3.624.416-5.117 1.266l.575 1.01Zm4.542-1.114c2.176 0 3.968.57 5.413 1.682l.708-.921c-1.679-1.292-3.731-1.923-6.121-1.923v1.162Zm5.417 1.685c1.439 1.084 2.366 2.59 2.772 4.556l1.138-.236c-.458-2.215-1.525-3.977-3.211-5.248l-.699.928Zm3.341 3.857h-4.865v1.162h4.865v-1.162Zm-4.306.425c-.276-.993-.838-1.785-1.679-2.346l-.644.967c.6.4.999.954 1.204 1.69l1.119-.31Zm-1.66-2.333c-.808-.584-1.76-.867-2.828-.867v1.162c.854 0 1.56.222 2.146.646l.682-.94Zm-2.828-.867c-1.44 0-2.675.552-3.67 1.628l.853.789c.782-.846 1.71-1.255 2.817-1.255v-1.162Zm-3.67 1.628c-1.016 1.098-1.488 2.588-1.488 4.395h1.161c0-1.605.417-2.782 1.18-3.606l-.853-.789Zm-1.488 4.395c0 1.807.472 3.297 1.488 4.395l.853-.789c-.763-.824-1.18-2-1.18-3.606h-1.161Zm1.488 4.395c.995 1.076 2.23 1.628 3.67 1.628v-1.161c-1.107 0-2.035-.41-2.817-1.256l-.853.79Zm3.67 1.628c1.062 0 2.01-.267 2.817-.823l-.66-.957c-.587.405-1.297.619-2.157.619v1.161Zm2.809-.818c.846-.564 1.406-1.37 1.68-2.386l-1.121-.303c-.206.762-.607 1.325-1.203 1.722l.644.967Zm1.12-1.957h4.865v-1.162h-4.865v1.162Zm4.297-.702c-.405 1.89-1.331 3.392-2.782 4.53l.717.914c1.674-1.313 2.742-3.056 3.201-5.201l-1.136-.243Zm-2.782 4.53c-1.444 1.133-3.235 1.714-5.408 1.714v1.162c2.392 0 4.446-.645 6.125-1.962l-.717-.914Zm11.338 1.142.28-.509-.28.509Zm-3.316-13.012-.509-.28-.004.007.513.273Zm3.244-3.351.291.502.002-.001-.293-.501Zm9.551-.072-.288.504.288-.505Zm3.135 3.171-.508.282.006.01.502-.292Zm1.118 5.262-.579-.048-.002.024v.024h.581Zm-.036.901v.581h.538l.041-.536-.579-.045Zm-13.588 0v-.58h-.623l.043.62.58-.04Zm1.441 3.28-.392.428.006.006.386-.434Zm5.551.577.318.486.004-.003-.322-.483Zm1.442-1.658v-.58h-.371l-.156.335.527.245Zm4.685 0 .557.166.222-.747h-.779v.581Zm-1.694 3.1-.443-.376-.001.002.444.374Zm-2.883 2.162-.242-.528-.005.002.247.526Zm-6.812-13.227.34.47.008-.006-.348-.464Zm-1.658 2.883-.571-.106-.127.687h.698v-.581Zm8.902 0v.58h.618l-.038-.615-.58.035Zm-1.297-2.811.383-.437-.383.437ZM161.49 32.66c-1.717 0-3.216-.365-4.513-1.08l-.561 1.016c1.49.823 3.187 1.226 5.074 1.226V32.66Zm-4.513-1.08a7.764 7.764 0 0 1-3.055-3.023l-1.01.574a8.926 8.926 0 0 0 3.504 3.465l.561-1.017Zm-3.055-3.023c-.737-1.295-1.114-2.803-1.114-4.543h-1.162c0 1.913.417 3.624 1.266 5.117l1.01-.574Zm-1.114-4.543c0-1.767.367-3.317 1.085-4.664l-1.025-.547c-.819 1.537-1.222 3.278-1.222 5.211h1.162Zm1.082-4.658c.744-1.352 1.751-2.391 3.026-3.129l-.583-1.005c-1.464.848-2.619 2.044-3.461 3.575l1.018.56Zm3.028-3.13c1.291-.757 2.821-1.146 4.608-1.146v-1.162c-1.96 0-3.699.428-5.195 1.306l.587 1.002Zm4.608-1.146c1.667 0 3.115.364 4.362 1.077l.576-1.009c-1.445-.825-3.096-1.23-4.938-1.23v1.162Zm4.362 1.077a7.545 7.545 0 0 1 2.915 2.948l1.017-.562a8.704 8.704 0 0 0-3.356-3.395l-.576 1.009Zm2.921 2.96c.714 1.226 1.075 2.602 1.075 4.14h1.162c0-1.729-.408-3.309-1.233-4.725l-1.004.584Zm1.075 4.14c0 .247-.011.507-.034.781l1.158.097c.025-.303.038-.596.038-.878h-1.162Zm-.036.83c0 .272-.012.557-.034.856l1.158.089c.025-.326.038-.641.038-.946h-1.162Zm.545.32h-13.588v1.161h13.588v-1.161Zm-14.168.62c.105 1.512.634 2.756 1.629 3.668l.785-.856c-.735-.673-1.167-1.616-1.255-2.891l-1.159.08Zm1.635 3.674c1.001.893 2.21 1.337 3.594 1.337v-1.162c-1.114 0-2.044-.35-2.821-1.042l-.773.867Zm3.594 1.337c1.021 0 1.92-.224 2.661-.708l-.636-.972c-.509.332-1.172.518-2.025.518v1.162Zm2.665-.71a4.56 4.56 0 0 0 1.646-1.897l-1.053-.49a3.41 3.41 0 0 1-1.237 1.42l.644.966Zm1.12-1.561h4.685v-1.162h-4.685v1.162Zm4.128-.747a7.946 7.946 0 0 1-1.58 2.89l.887.75a9.115 9.115 0 0 0 1.807-3.308l-1.114-.332Zm-1.581 2.892c-.71.843-1.601 1.513-2.681 2.008l.484 1.056c1.226-.562 2.258-1.334 3.085-2.316l-.888-.748Zm-2.686 2.01c-1.041.487-2.24.738-3.61.738v1.162c1.514 0 2.885-.278 4.103-.848l-.493-1.052Zm-3.574-14.255c-1.249 0-2.37.361-3.34 1.089l.697.93c.76-.57 1.634-.858 2.643-.858v-1.161Zm-3.331 1.083c-1.014.732-1.629 1.84-1.889 3.248l1.142.212c.22-1.187.71-2 1.427-2.518l-.68-.942Zm-1.318 3.935h8.902v-1.162h-8.902v1.162Zm9.482-.616c-.08-1.312-.571-2.401-1.494-3.213l-.767.873c.663.582 1.038 1.368 1.101 2.41l1.16-.07Zm-1.494-3.213c-.911-.8-2.038-1.19-3.339-1.19v1.162c1.054 0 1.898.308 2.572.901l.767-.873Z"
        fill="currentColor"
      />
      <rect width={26.803} height={40.079} rx={4.008} fill="url(#a)" />
      <g filter="url(#b)">
        <path
          d="M9.018 15.781a2.505 2.505 0 0 1 2.505-2.505h22.043a2.505 2.505 0 0 1 2.505 2.505v21.793a2.505 2.505 0 0 1-2.505 2.505H9.018V15.781Z"
          fill="#037C66"
        />
      </g>
      <g clipPath="url(#c)">
        <path
          d="M24.832 21.274h-4.357l-1.613-2.42a.544.544 0 0 1 .453-.847h6.677c.436 0 .695.484.453.846l-1.613 2.42Zm-4.357 1.089h4.357c.13.085.275.18.412.286 1.96 1.235 6.122 3.897 6.122 9.516a3.268 3.268 0 0 1-3.267 3.267H17.208a3.268 3.268 0 0 1-3.267-3.267c0-5.62 4.162-8.28 6.092-9.516.167-.106.313-.2.442-.286Zm2.863 3.267c0-.377-.307-.684-.715-.684-.347 0-.654.307-.654.684v.205c-.19.04-.401.098-.54.173-.508.232-.95.66-1.06 1.283-.06.347-.026.684.116.987.143.3.365.51.59.664.394.269.915.425 1.313.544l.075.02c.476.147.796.253.997.4.085.06.116.108.126.139.014.027.034.088.01.224-.02.12-.085.222-.272.3-.208.088-.545.133-.98.064-.204-.034-.569-.156-.892-.265-.075-.027-.15-.051-.218-.075a.68.68 0 0 0-.86.432c-.12.358.074.742.431.83.041.045.092.062.15.082.239.092.691.235 1.014.31v.218c0 .378.307.684.654.684.408 0 .715-.306.715-.684v-.187c.18-.034.357-.116.52-.157.538-.228.967-.67 1.08-1.317a1.728 1.728 0 0 0-.103-1.004 1.676 1.676 0 0 0-.575-.694c-.412-.303-.963-.466-1.375-.592l-.058-.007c-.453-.147-.78-.249-.987-.392-.088-.06-.116-.102-.122-.119-.007-.013-.028-.054-.007-.17.013-.068.065-.18.279-.276.19-.098.558-.153.973-.119.15.055.61.143.742.177.361.099.735-.119.83-.483a.677.677 0 0 0-.483-.83c-.15-.041-.49-.11-.714-.15v-.215Z"
          fill="#33B099"
        />
      </g>
      <defs>
        <linearGradient id="a" x1={0} y1={0} x2={52.058} y2={25.513} gradientUnits="userSpaceOnUse">
          <stop stopColor="#29AE96" />
          <stop offset={1} stopColor="#5AB8A7" />
        </linearGradient>
        <clipPath id="c">
          <path fill="#fff" transform="translate(13.94 18.007)" d="M0 0h17.426v17.426H0z" />
        </clipPath>
        <filter
          id="b"
          x={3.757}
          y={8.016}
          width={32.314}
          height={32.063}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology radius={1.753} in="SourceAlpha" result="effect1_dropShadow_595_9342" />
          <feOffset dx={-2.755} dy={-2.755} />
          <feGaussianBlur stdDeviation={2.129} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_595_9342" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_595_9342" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
