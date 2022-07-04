import React, { useCallback } from "react";
import { LogoProps } from "./LogoConstant";

export const FinanceLogo30: React.FC<LogoProps> = (props) => {
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
      {...props}
      onClick={handleClick}
      className={`${type === "button" ? "cursor-pointer" : ""}`}
      width={132}
      height={31}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.13 24.356V13.841H32.29V10.95h1.839V9.38c0-1.622.405-2.775 1.216-3.46.829-.685 1.946-1.027 3.352-1.027h1.487V7.84h-.946c-.595 0-1.019.117-1.27.351-.253.235-.38.631-.38 1.19v1.568h8.65v13.407h-3.46V13.841h-5.19v10.515h-3.46ZM44.537 9.03c-.63 0-1.154-.189-1.568-.567-.397-.379-.595-.856-.595-1.433 0-.577.198-1.045.595-1.406.414-.378.937-.567 1.568-.567.63 0 1.144.189 1.54.567.415.36.622.83.622 1.406 0 .577-.207 1.054-.621 1.433-.397.378-.91.567-1.541.567ZM49.9 24.356V10.95h3.055l.27 2.27a4.742 4.742 0 0 1 1.784-1.892c.793-.468 1.721-.703 2.784-.703 1.658 0 2.947.523 3.866 1.568s1.379 2.577 1.379 4.596v7.568h-3.46v-7.244c0-1.153-.235-2.036-.703-2.65-.469-.612-1.199-.918-2.19-.918-.973 0-1.775.342-2.406 1.027-.612.685-.919 1.64-.919 2.865v6.92h-3.46Zm21.069.325c-1.154 0-2.1-.18-2.839-.54-.739-.38-1.288-.875-1.649-1.488a3.925 3.925 0 0 1-.54-2.027c0-1.243.486-2.253 1.46-3.027.973-.775 2.432-1.163 4.379-1.163h3.405v-.324c0-.92-.26-1.595-.783-2.028-.523-.432-1.172-.648-1.947-.648-.703 0-1.315.17-1.838.513-.522.325-.847.811-.973 1.46h-3.379c.09-.973.415-1.82.973-2.541.577-.72 1.316-1.27 2.217-1.649.9-.396 1.91-.595 3.027-.595 1.91 0 3.415.478 4.515 1.433 1.099.955 1.649 2.307 1.649 4.055v8.244H75.7l-.324-2.162a4.957 4.957 0 0 1-1.676 1.784c-.703.469-1.613.703-2.73.703Zm.784-2.703c.99 0 1.757-.325 2.297-.974.559-.648.91-1.45 1.054-2.405H72.16c-.92 0-1.577.17-1.973.513-.397.325-.595.73-.595 1.217 0 .522.198.928.595 1.216.396.288.919.433 1.567.433Zm10.194 2.378V10.95h3.055l.27 2.27a4.742 4.742 0 0 1 1.785-1.892c.792-.468 1.72-.703 2.784-.703 1.658 0 2.946.523 3.865 1.568.92 1.045 1.379 2.577 1.379 4.596v7.568h-3.46v-7.244c0-1.153-.235-2.036-.703-2.65-.469-.612-1.198-.918-2.19-.918-.973 0-1.775.342-2.405 1.027-.613.685-.92 1.64-.92 2.865v6.92h-3.46Zm23.015.325c-1.369 0-2.577-.297-3.622-.892a6.593 6.593 0 0 1-2.487-2.487c-.595-1.063-.892-2.28-.892-3.65 0-1.369.297-2.585.892-3.649a6.593 6.593 0 0 1 2.487-2.487c1.045-.594 2.253-.892 3.622-.892 1.712 0 3.154.45 4.325 1.352 1.172.883 1.92 2.108 2.244 3.676h-3.649a2.592 2.592 0 0 0-1.082-1.513c-.522-.379-1.144-.568-1.865-.568-.955 0-1.766.36-2.433 1.081-.666.72-1 1.721-1 3 0 1.28.334 2.28 1 3.001.667.72 1.478 1.081 2.433 1.081.721 0 1.343-.18 1.865-.54.541-.36.901-.874 1.082-1.541h3.649c-.324 1.514-1.072 2.73-2.244 3.65-1.171.918-2.613 1.378-4.325 1.378Zm16.155 0c-1.352 0-2.55-.289-3.596-.865a6.265 6.265 0 0 1-2.46-2.433c-.594-1.045-.892-2.253-.892-3.622 0-1.388.289-2.622.865-3.704.595-1.08 1.406-1.919 2.433-2.514 1.046-.612 2.271-.919 3.677-.919 1.315 0 2.478.289 3.487.865a6.084 6.084 0 0 1 2.351 2.38c.577.99.865 2.099.865 3.324 0 .198-.009.405-.027.622 0 .216-.009.441-.027.676h-10.191c.073 1.045.433 1.865 1.082 2.46.667.594 1.468.892 2.406.892.702 0 1.288-.154 1.757-.46a2.992 2.992 0 0 0 1.081-1.243h3.514a6.403 6.403 0 0 1-1.27 2.324 6.112 6.112 0 0 1-2.163 1.622c-.847.397-1.811.595-2.892.595Zm.027-11.245c-.847 0-1.595.243-2.244.73-.649.468-1.063 1.189-1.243 2.162h6.676c-.054-.883-.378-1.586-.973-2.108-.594-.523-1.333-.784-2.216-.784Z"
        fill="currentColor"
      />
      <path
        d="M34.13 24.356h-.436v.436h.436v-.436Zm0-10.515h.435v-.435h-.435v.435Zm-1.839 0h-.435v.436h.435v-.436Zm0-2.892v-.436h-.435v.436h.435Zm1.839 0v.435h.435v-.435h-.435Zm1.216-5.028-.277-.336-.004.003.281.333Zm4.839-1.027h.435v-.436h-.435v.436Zm0 2.946v.436h.435V7.84h-.435Zm-2.217.351-.296-.319.296.32Zm-.378 2.758h-.436v.435h.436v-.435Zm8.65 0h.435v-.436h-.435v.436Zm0 13.407v.436h.435v-.436h-.435Zm-3.46 0h-.436v.436h.436v-.436Zm0-10.515h.435v-.435h-.435v.435Zm-5.19 0v-.435h-.436v.435h.436Zm0 10.515v.436h.435v-.436h-.435Zm5.379-15.894-.3.315.006.007.294-.322Zm0-2.839.293.323-.293-.323Zm3.109 0-.301.316.007.007.008.006.286-.329Zm0 2.839-.294-.322-.007.007.3.315ZM34.565 24.356V13.841h-.871v10.515h.871Zm-.435-10.95H32.29v.87h1.839v-.87Zm-1.403.435V10.95h-.871v2.892h.871Zm-.435-2.457h1.838v-.87H32.29v.87Zm2.273-.435V9.38h-.871v1.568h.871Zm0-1.568c0-1.562.392-2.561 1.062-3.127l-.562-.666c-.951.803-1.371 2.111-1.371 3.793h.871Zm1.059-3.124c.73-.603 1.738-.928 3.074-.928v-.871c-1.475 0-2.701.36-3.63 1.127l.556.672Zm3.074-.928h1.487v-.871h-1.487v.871Zm1.051-.435V7.84h.871V4.894h-.87Zm.436 2.51h-.946v.872h.946v-.872Zm-.946 0c-.631 0-1.193.12-1.567.468l.593.639c.13-.121.415-.235.974-.235v-.872Zm-1.567.468c-.383.356-.518.902-.518 1.509h.871c0-.51.118-.758.24-.87l-.593-.639Zm-.518 1.509v1.568h.871V9.38h-.87Zm.436 2.003h8.65v-.87h-8.65v.87Zm8.214-.435v13.407h.871V10.95h-.87Zm.436 12.972h-3.46v.871h3.46v-.871Zm-3.025.435V13.841h-.87v10.515h.87Zm-.435-10.95h-5.19v.87h5.19v-.87Zm-5.626.435v10.515h.871V13.841h-.87Zm.436 10.08h-3.46v.871h3.46v-.871Zm6.947-15.327c-.537 0-.95-.158-1.274-.454l-.588.644c.505.46 1.137.681 1.862.681v-.871Zm-1.267-.447c-.306-.292-.46-.653-.46-1.118h-.871c0 .689.242 1.283.73 1.748l.6-.63Zm-.46-1.118c0-.464.154-.812.452-1.083l-.586-.645c-.495.45-.737 1.04-.737 1.728h.87Zm.453-1.084c.324-.296.737-.454 1.274-.454v-.87c-.725 0-1.357.22-1.862.68l.588.644Zm1.274-.454c.537 0 .937.158 1.24.448l.601-.63c-.49-.468-1.117-.689-1.841-.689v.871Zm1.255.461c.314.273.472.62.472 1.077h.871c0-.695-.257-1.287-.771-1.734l-.572.657Zm.472 1.077c0 .458-.159.818-.48 1.111l.587.644c.508-.464.764-1.06.764-1.755h-.871Zm-.487 1.118c-.303.29-.703.447-1.24.447v.871c.724 0 1.352-.22 1.841-.688l-.601-.63Zm4.124 16.21h-.436v.435h.436v-.436Zm0-13.408v-.436h-.436v.436h.436Zm3.055 0 .432-.052-.045-.384h-.387v.436Zm.27 2.27-.432.052.166 1.398.652-1.248-.386-.202Zm1.784-1.892-.221-.375-.004.002.225.373Zm6.65.865-.327.288.327-.288Zm1.379 12.164v.436h.435v-.436h-.435Zm-3.46 0h-.436v.436h.435v-.436Zm-.703-9.893.346-.265-.346.265Zm-4.596.108-.32-.295-.004.005.324.29Zm-.919 9.785v.436h.436v-.436h-.436Zm-3.024 0V10.95h-.872v13.407h.872ZM49.9 11.384h3.055v-.87H49.9v.87ZM52.523 11l.27 2.27.866-.102-.27-2.27-.866.102Zm1.09 2.421a4.306 4.306 0 0 1 1.623-1.721l-.451-.746a5.176 5.176 0 0 0-1.945 2.064l.772.403Zm1.619-1.719c.716-.423 1.565-.642 2.562-.642v-.871c-1.129 0-2.136.25-3.005.763l.443.75Zm2.562-.642c1.56 0 2.718.487 3.539 1.42l.654-.575c-1.018-1.158-2.436-1.716-4.193-1.716v.871Zm3.539 1.42c.823.936 1.27 2.348 1.27 4.308h.871c0-2.078-.472-3.73-1.487-4.883l-.654.575Zm1.27 4.308v7.568h.871v-7.568h-.871Zm.435 7.133h-3.46v.871h3.46v-.871Zm-3.024.435v-7.244h-.871v7.244h.871Zm0-7.244c0-1.204-.243-2.196-.792-2.914l-.692.53c.388.507.613 1.281.613 2.384h.871Zm-.792-2.914c-.574-.75-1.451-1.09-2.536-1.09v.871c.898 0 1.48.273 1.844.748l.692-.529Zm-2.536-1.09c-1.089 0-2.009.389-2.726 1.168l.64.59c.545-.59 1.228-.887 2.086-.887v-.87Zm-2.73 1.172c-.706.789-1.03 1.86-1.03 3.156h.87c0-1.154.289-1.993.809-2.575l-.65-.58Zm-1.03 3.156v6.92h.87v-6.92h-.87Zm.435 6.485h-3.46v.871h3.46v-.871Zm14.77.22-.198.387.007.004.191-.392Zm-1.649-1.488-.375.221.375-.22Zm.92-5.054.27.34-.27-.34Zm7.784-1.163v.436h.436v-.436h-.436Zm-.783-2.352.277-.335-.277.335Zm-3.785-.135.23.37.009-.005-.239-.365Zm-.973 1.46v.436h.36l.068-.353-.428-.083Zm-3.379 0-.434-.04-.044.476h.478v-.436Zm.973-2.541-.34-.272-.004.005.344.267Zm2.217-1.649.168.402.007-.003-.175-.399Zm7.542.838-.286.329.286-.329Zm1.649 12.3v.435h.435v-.436h-.435Zm-2.947 0-.43.064.055.371h.375v-.436Zm-.324-2.163.43-.065-.19-1.275-.622 1.13.382.21ZM73.7 23.978l-.238-.365-.004.003.242.362Zm.351-2.974-.33-.284-.005.006.335.279Zm1.054-2.405.431.065.076-.5h-.507v.435Zm-4.92.513.277.338.008-.008-.284-.33Zm0 2.433.257-.352-.256.352Zm.785 2.7c-1.113 0-1.987-.174-2.648-.496l-.382.783c.818.398 1.835.584 3.03.584v-.87Zm-2.64-.492c-.678-.348-1.16-.79-1.472-1.32l-.751.441c.409.696 1.026 1.244 1.826 1.654l.397-.775Zm-1.472-1.32a3.49 3.49 0 0 1-.48-1.807h-.872c0 .813.2 1.566.6 2.248l.752-.441Zm-.48-1.807c0-1.11.425-1.994 1.295-2.687l-.543-.681c-1.077.857-1.624 1.992-1.624 3.368h.871Zm1.295-2.687c.863-.687 2.207-1.067 4.108-1.067V16c-1.993 0-3.568.395-4.651 1.258l.543.681Zm4.108-1.067h3.405V16h-3.405v.872Zm3.841-.436v-.324h-.871v.324h.871Zm0-.324c0-1-.287-1.821-.942-2.363l-.555.671c.39.323.626.854.626 1.692h.871Zm-.942-2.363c-.611-.507-1.363-.749-2.224-.749v.871c.69 0 1.235.19 1.669.549l.555-.671ZM72.456 13c-.776 0-1.474.19-2.077.585l.478.729c.443-.29.97-.443 1.6-.443V13Zm-2.068.58c-.634.393-1.023.988-1.17 1.746l.855.166c.105-.54.364-.917.775-1.173l-.46-.74Zm-.743 1.393h-3.379v.872h3.379v-.872Zm-2.945.476c.083-.897.38-1.664.884-2.314l-.69-.534c-.612.791-.965 1.718-1.062 2.768l.868.08Zm.88-2.309c.528-.66 1.207-1.167 2.044-1.52l-.337-.803a5.955 5.955 0 0 0-2.388 1.779l.68.544Zm2.051-1.522c.839-.37 1.787-.558 2.852-.558v-.871c-1.17 0-2.24.207-3.203.631l.351.798Zm2.852-.558c1.839 0 3.23.459 4.229 1.326l.571-.658c-1.2-1.043-2.818-1.54-4.8-1.54v.872Zm4.229 1.326c.985.856 1.499 2.076 1.499 3.726h.871c0-1.847-.585-3.33-1.799-4.384l-.571.658Zm1.499 3.726v8.244h.871v-8.244h-.871Zm.436 7.809H75.7v.871h2.947v-.871Zm-2.516.37-.324-2.162-.862.13.324 2.162.862-.13Zm-1.137-2.307a4.521 4.521 0 0 1-1.532 1.629l.475.73a5.394 5.394 0 0 0 1.82-1.94l-.763-.419Zm-1.536 1.631c-.611.408-1.43.63-2.488.63v.871c1.176 0 2.177-.246 2.972-.776l-.484-.724Zm-1.704-1.202c1.095 0 1.994-.364 2.632-1.13l-.67-.557c-.443.531-1.076.816-1.962.816v.871Zm2.627-1.124c.62-.719 1-1.6 1.155-2.625l-.861-.13c-.134.884-.455 1.607-.954 2.186l.66.569Zm.724-3.126H72.16v.871h2.946v-.87Zm-2.946 0c-.952 0-1.741.173-2.258.62l.57.659c.276-.239.802-.408 1.688-.408v-.87Zm-2.25.612c-.49.402-.754.929-.754 1.554h.872c0-.349.133-.633.434-.88l-.551-.674Zm-.754 1.554c0 .65.257 1.192.774 1.569l.513-.705c-.275-.2-.415-.47-.415-.864h-.872Zm.774 1.569c.492.357 1.113.515 1.825.515v-.871c-.587 0-1.01-.13-1.312-.35l-.513.706Zm12.02 2.458h-.436v.436h.435v-.436Zm0-13.407v-.436h-.436v.436h.435Zm3.054 0 .433-.052-.046-.384h-.387v.436Zm.27 2.27-.432.052.166 1.398.652-1.248-.386-.202Zm1.785-1.892-.222-.375-.004.002.226.373Zm6.65.865-.328.288.327-.288Zm1.378 12.164v.436h.436v-.436h-.436Zm-3.46 0h-.436v.436h.436v-.436Zm-.703-9.893.346-.265-.346.265Zm-4.595.108-.32-.295-.005.005.325.29Zm-.92 9.785v.436h.436v-.436h-.435Zm-3.024 0V10.95h-.871v13.407h.871Zm-.436-12.972h3.055v-.87h-3.055v.87ZM84.572 11l.27 2.27.865-.102-.27-2.27-.866.102Zm1.088 2.421a4.306 4.306 0 0 1 1.624-1.721l-.45-.746a5.176 5.176 0 0 0-1.946 2.064l.772.403Zm1.62-1.719c.716-.423 1.565-.642 2.563-.642v-.871c-1.13 0-2.136.25-3.006.763l.443.75Zm2.563-.642c1.559 0 2.718.487 3.538 1.42l.654-.575c-1.017-1.158-2.435-1.716-4.192-1.716v.871Zm3.538 1.42c.824.936 1.27 2.348 1.27 4.308h.871c0-2.078-.472-3.73-1.487-4.883l-.654.575Zm1.27 4.308v7.568h.871v-7.568h-.87Zm.436 7.133h-3.46v.871h3.46v-.871Zm-3.025.435v-7.244h-.87v7.244h.87Zm0-7.244c0-1.204-.243-2.196-.792-2.914l-.692.53c.388.507.613 1.281.613 2.384h.871Zm-.792-2.914c-.574-.75-1.451-1.09-2.536-1.09v.871c.898 0 1.48.273 1.844.748l.692-.529Zm-2.536-1.09c-1.088 0-2.008.389-2.726 1.168l.641.59c.544-.59 1.228-.887 2.085-.887v-.87Zm-2.73 1.172c-.705.789-1.03 1.86-1.03 3.156h.871c0-1.154.288-1.993.808-2.575l-.649-.58Zm-1.03 3.156v6.92h.871v-6.92h-.871Zm.436 6.485h-3.46v.871h3.46v-.871Zm15.932-.132.215-.379-.215.379Zm-2.487-2.487-.38.213.003.004.377-.217Zm0-7.299-.377-.217-.003.005.38.212Zm2.487-2.487.215.379-.215-.379Zm7.947.46-.265.345.003.003.262-.348Zm2.244 3.676v.436h.535l-.108-.524-.427.088Zm-3.649 0-.42.117.089.319h.331v-.436Zm-1.082-1.513-.255.352.007.005.007.005.241-.362Zm-4.298.513-.319-.296.319.296Zm0 6.001.32-.296-.32.296Zm4.298.54-.241-.362-.006.004.247.359Zm1.082-1.54v-.436h-.334l-.087.322.421.114Zm3.649 0 .426.091.113-.527h-.539v.436Zm-2.244 3.65-.269-.344.269.343Zm-4.325.942c-1.305 0-2.436-.283-3.407-.835l-.43.757c1.119.637 2.403.95 3.837.95v-.872Zm-3.407-.835a6.156 6.156 0 0 1-2.325-2.326l-.754.435a7.02 7.02 0 0 0 2.649 2.648l.43-.757Zm-2.322-2.32c-.554-.991-.836-2.133-.836-3.437h-.872c0 1.434.313 2.726.948 3.862l.76-.426Zm-.836-3.437c0-1.305.282-2.446.836-3.437l-.76-.425c-.636 1.136-.948 2.427-.948 3.862h.872Zm.834-3.432a6.157 6.157 0 0 1 2.324-2.326l-.43-.757a7.02 7.02 0 0 0-2.65 2.648l.755.435Zm2.324-2.326c.971-.552 2.102-.835 3.407-.835v-.871c-1.434 0-2.718.312-3.837.949l.43.757Zm3.407-.835c1.632 0 2.976.428 4.06 1.261l.531-.69c-1.259-.969-2.799-1.442-4.591-1.442v.871Zm4.063 1.264c1.079.813 1.774 1.942 2.079 3.417l.854-.177c-.344-1.661-1.145-2.983-2.408-3.936l-.525.696Zm2.506 2.893h-3.649v.87h3.649v-.87Zm-3.23.319a3.023 3.023 0 0 0-1.259-1.76l-.483.725c.45.3.75.716.903 1.268l.839-.233Zm-1.245-1.75c-.606-.439-1.319-.65-2.121-.65v.87c.641 0 1.17.167 1.61.485l.511-.705Zm-2.121-.65c-1.08 0-2.006.413-2.752 1.22l.639.592c.587-.635 1.283-.942 2.113-.942v-.87Zm-2.752 1.22c-.762.824-1.116 1.942-1.116 3.297h.871c0-1.204.312-2.087.884-2.705l-.639-.592Zm-1.116 3.297c0 1.355.354 2.473 1.116 3.296l.639-.592c-.572-.618-.884-1.5-.884-2.704h-.871Zm1.116 3.296c.746.807 1.672 1.221 2.752 1.221v-.871c-.83 0-1.526-.307-2.113-.942l-.639.592Zm2.752 1.221c.797 0 1.508-.2 2.113-.618l-.495-.717c-.44.304-.973.464-1.618.464v.871Zm2.107-.614c.634-.423 1.054-1.028 1.26-1.79l-.841-.227c-.154.572-.455.994-.902 1.292l.483.725Zm.84-1.467h3.649v-.872h-3.649v.872Zm3.223-.527c-.304 1.418-.999 2.544-2.087 3.397l.538.686c1.255-.985 2.056-2.292 2.401-3.9l-.852-.183Zm-2.087 3.397c-1.083.85-2.426 1.286-4.056 1.286v.871c1.794 0 3.335-.483 4.594-1.471l-.538-.686Zm8.503.857.211-.382-.211.382Zm-2.487-9.759-.381-.21-.003.005.384.205Zm2.433-2.514.219.377h.002l-.221-.377Zm7.164-.054-.216.379.216-.379Zm2.351 2.38-.381.21.005.008.376-.219Zm.838 3.946-.434-.036-.001.018v.018h.435Zm-.027.676v.435h.404l.031-.402-.435-.033Zm-10.191 0v-.436h-.466l.032.465.434-.03Zm1.082 2.46-.295.32.005.005.29-.325Zm4.163.432.238.365.003-.003-.241-.362Zm1.081-1.243v-.436h-.278l-.117.252.395.184Zm3.514 0 .418.124.166-.56h-.584v.436Zm-1.27 2.324-.333-.281h-.001l.334.281Zm-2.163 1.622-.182-.396-.003.002.185.394Zm-5.109-9.92.255.353.006-.005-.261-.348Zm-1.243 2.162-.429-.08-.095.516h.524v-.436Zm6.676 0v.436h.463l-.028-.463-.435.027Zm-.973-2.108.288-.328-.288.328Zm-2.243 10.025c-1.288 0-2.413-.274-3.385-.81l-.421.762c1.118.617 2.39.92 3.806.92v-.872Zm-3.385-.81a5.82 5.82 0 0 1-2.292-2.267l-.757.43a6.696 6.696 0 0 0 2.628 2.6l.421-.764Zm-2.292-2.267c-.552-.971-.835-2.103-.835-3.407h-.871c0 1.434.312 2.718.949 3.837l.757-.43Zm-.835-3.407c0-1.326.275-2.488.814-3.499l-.769-.41c-.614 1.153-.916 2.46-.916 3.909h.871Zm.811-3.494c.558-1.014 1.314-1.793 2.27-2.347l-.437-.754c-1.099.636-1.965 1.534-2.596 2.681l.763.42Zm2.272-2.348c.968-.567 2.115-.859 3.456-.859v-.871c-1.471 0-2.775.32-3.897.979l.441.751Zm3.456-.859c1.25 0 2.336.273 3.271.808l.432-.757c-1.083-.619-2.322-.922-3.703-.922v.871Zm3.271.808a5.65 5.65 0 0 1 2.186 2.211l.763-.422a6.528 6.528 0 0 0-2.517-2.546l-.432.757Zm2.191 2.22c.535.92.806 1.951.806 3.105h.871c0-1.297-.306-2.482-.924-3.544l-.753.438Zm.806 3.105c0 .185-.009.38-.026.586l.869.072c.019-.227.028-.447.028-.658h-.871Zm-.027.622c0 .204-.009.418-.026.642l.869.067c.019-.245.028-.48.028-.71h-.871Zm.408.24h-10.191v.871h10.191v-.871Zm-10.625.465c.078 1.135.475 2.067 1.221 2.752l.589-.643c-.551-.505-.875-1.212-.941-2.168l-.869.06Zm1.226 2.756c.751.67 1.657 1.002 2.696 1.002v-.871c-.836 0-1.533-.262-2.116-.782l-.58.65Zm2.696 1.002c.765 0 1.439-.167 1.995-.53l-.477-.73c-.381.25-.879.389-1.518.389v.871Zm1.998-.533c.55-.366.965-.841 1.235-1.422l-.79-.367a2.56 2.56 0 0 1-.928 1.064l.483.725Zm.84-1.17h3.514v-.871h-3.514v.871Zm3.096-.56a5.962 5.962 0 0 1-1.185 2.168l.665.563a6.846 6.846 0 0 0 1.356-2.482l-.836-.249Zm-1.186 2.169a5.66 5.66 0 0 1-2.011 1.506l.364.792c.919-.421 1.693-1 2.314-1.737l-.667-.561Zm-2.014 1.508c-.781.365-1.68.553-2.707.553v.871c1.135 0 2.164-.208 3.077-.635l-.37-.79ZM121.145 13c-.937 0-1.778.271-2.505.817l.522.697c.57-.427 1.225-.643 1.983-.643V13Zm-2.499.812c-.76.55-1.221 1.38-1.417 2.437l.857.158c.165-.89.532-1.5 1.07-1.888l-.51-.707Zm-.988 2.952h6.676v-.872h-6.676v.872Zm7.111-.463c-.06-.983-.428-1.8-1.12-2.409l-.575.655c.497.436.778 1.025.826 1.808l.869-.054Zm-1.12-2.409c-.684-.6-1.529-.892-2.504-.892v.871c.79 0 1.423.231 1.929.676l.575-.655Z"
        fill="currentColor"
      />
      <rect width={20.102} height={30.059} rx={3.006} fill="url(#a)" />
      <g filter="url(#b)">
        <path
          d="M6.763 11.836c0-1.038.842-1.879 1.88-1.879h16.532c1.037 0 1.878.841 1.878 1.879V28.18a1.879 1.879 0 0 1-1.878 1.878H6.763V11.836Z"
          fill="#037C66"
        />
      </g>
      <g clipPath="url(#c)">
        <path
          d="M18.624 15.956h-3.267l-1.21-1.816a.408.408 0 0 1 .34-.635h5.007c.327 0 .521.363.34.635l-1.21 1.816Zm-3.267.816h3.267c.097.064.207.136.309.215 1.47.926 4.592 2.923 4.592 7.137a2.451 2.451 0 0 1-2.45 2.45h-8.169a2.45 2.45 0 0 1-2.45-2.45c0-4.214 3.121-6.21 4.569-7.137.125-.08.235-.15.332-.215Zm2.146 2.45a.519.519 0 0 0-.536-.512c-.26 0-.49.23-.49.513v.153a1.68 1.68 0 0 0-.406.13c-.38.174-.712.495-.794.962-.045.26-.02.514.087.74.107.225.273.384.442.498.296.202.687.32.985.409l.056.015c.358.11.598.19.748.299.064.046.087.082.095.105.01.02.025.066.007.168-.015.09-.063.166-.204.225-.156.066-.408.1-.735.048-.153-.025-.426-.117-.669-.199l-.163-.056a.51.51 0 0 0-.646.324.477.477 0 0 0 .324.623c.03.033.07.046.113.061.178.07.518.176.76.232v.164c0 .283.23.513.49.513.307 0 .536-.23.536-.513v-.14c.136-.026.268-.087.39-.118.404-.171.726-.503.81-.988.046-.265.026-.52-.077-.753-.1-.23-.26-.398-.431-.52-.309-.228-.722-.35-1.031-.445l-.044-.005c-.34-.11-.584-.186-.74-.293-.066-.046-.087-.077-.092-.09-.005-.01-.02-.04-.005-.127.01-.051.049-.136.21-.207.142-.074.418-.115.73-.09.112.041.456.108.556.133.27.074.551-.09.623-.362a.507.507 0 0 0-.363-.623 8.62 8.62 0 0 0-.536-.112v-.161Z"
          fill="#33B099"
        />
      </g>
      <defs>
        <linearGradient id="a" x1={0} y1={0} x2={39.044} y2={19.135} gradientUnits="userSpaceOnUse">
          <stop stopColor="#29AE96" />
          <stop offset={1} stopColor="#5AB8A7" />
        </linearGradient>
        <clipPath id="c">
          <path fill="#fff" transform="translate(10.456 13.505)" d="M0 0h13.069v13.069H0z" />
        </clipPath>
        <filter
          id="b"
          x={2.818}
          y={6.012}
          width={24.235}
          height={24.047}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology radius={1.315} in="SourceAlpha" result="effect1_dropShadow_599_9376" />
          <feOffset dx={-2.067} dy={-2.067} />
          <feGaussianBlur stdDeviation={1.597} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_599_9376" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_599_9376" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
