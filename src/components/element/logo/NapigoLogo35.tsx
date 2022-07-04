import React, { useCallback } from "react";
import { LogoProps } from "./LogoConstant";

export const NapigoLogo35: React.FC<LogoProps> = (props) => {
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
      width={138}
      height={36}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M38.406 27.964V12.686h3.48l.309 2.588a5.403 5.403 0 0 1 2.033-2.156c.903-.534 1.96-.801 3.172-.801 1.89 0 3.358.595 4.405 1.786 1.047 1.191 1.57 2.937 1.57 5.237v8.624h-3.942v-8.255c0-1.314-.267-2.32-.8-3.018-.535-.699-1.366-1.048-2.496-1.048-1.108 0-2.022.39-2.741 1.17-.698.781-1.047 1.87-1.047 3.266v7.885h-3.943Zm24.007.37c-1.314 0-2.392-.206-3.234-.616-.842-.432-1.468-.996-1.88-1.695a4.473 4.473 0 0 1-.615-2.31c0-1.416.554-2.567 1.663-3.45 1.109-.882 2.772-1.324 4.99-1.324h3.881v-.37c0-1.047-.298-1.817-.893-2.31-.596-.492-1.335-.739-2.218-.739-.8 0-1.499.195-2.094.585-.596.37-.966.924-1.11 1.664h-3.85c.103-1.11.473-2.074 1.11-2.896.656-.821 1.498-1.447 2.525-1.879 1.027-.451 2.177-.677 3.45-.677 2.176 0 3.891.544 5.144 1.632 1.252 1.088 1.879 2.629 1.879 4.62v9.395h-3.358l-.37-2.464a5.65 5.65 0 0 1-1.91 2.033c-.8.534-1.837.8-3.11.8Zm.893-3.08c1.13 0 2.002-.37 2.618-1.11.637-.739 1.037-1.652 1.202-2.74h-3.358c-1.047 0-1.797.194-2.248.584-.452.37-.678.832-.678 1.387 0 .595.226 1.057.678 1.386.451.328 1.047.492 1.786.492Zm11.617 9.486V12.686h3.511l.432 2.187c.493-.677 1.14-1.273 1.94-1.786.822-.514 1.88-.77 3.173-.77 1.437 0 2.72.349 3.85 1.047s2.023 1.653 2.68 2.864c.657 1.212.985 2.588.985 4.128s-.328 2.916-.985 4.127a7.565 7.565 0 0 1-2.68 2.834c-1.13.678-2.413 1.017-3.85 1.017-1.15 0-2.156-.216-3.019-.647a5.442 5.442 0 0 1-2.094-1.818v8.871h-3.943Zm8.224-9.856c1.253 0 2.29-.421 3.111-1.263.822-.842 1.232-1.93 1.232-3.265 0-1.335-.41-2.433-1.232-3.296-.821-.862-1.858-1.293-3.11-1.293-1.274 0-2.321.43-3.143 1.293-.8.842-1.2 1.93-1.2 3.265 0 1.335.4 2.434 1.2 3.296.822.842 1.869 1.263 3.142 1.263Zm13.995-14.57c-.719 0-1.314-.215-1.787-.646-.452-.432-.677-.976-.677-1.633s.225-1.19.677-1.601c.472-.432 1.068-.647 1.787-.647.719 0 1.304.215 1.755.647.473.41.709.944.709 1.601s-.236 1.201-.709 1.633c-.451.43-1.037.647-1.755.647Zm-1.972 17.65V12.686h3.943v15.278H95.17Zm14.527-4.559c-.74 0-1.428-.082-2.064-.246l-1.14 1.14c.349.184.822.338 1.417.462.596.123 1.561.246 2.895.37 2.033.184 3.512.667 4.436 1.447.924.78 1.386 1.858 1.386 3.234 0 .904-.246 1.756-.739 2.557-.493.821-1.253 1.478-2.28 1.971-1.026.513-2.341.77-3.942.77-2.177 0-3.933-.41-5.267-1.232-1.335-.8-2.002-2.012-2.002-3.635 0-1.375.667-2.566 2.002-3.573a7.462 7.462 0 0 1-1.078-.585 6.003 6.003 0 0 1-.77-.647v-.708l2.679-2.834c-1.191-1.047-1.786-2.392-1.786-4.035 0-1.027.246-1.961.739-2.803.513-.842 1.232-1.51 2.156-2.002.924-.493 2.043-.74 3.358-.74.862 0 1.663.124 2.402.37h5.791v2.403l-2.618.185c.41.78.616 1.642.616 2.587 0 1.027-.247 1.961-.739 2.803-.493.842-1.212 1.51-2.157 2.002-.924.493-2.022.74-3.295.74Zm0-3.018c.8 0 1.458-.216 1.971-.647.534-.431.801-1.047.801-1.848 0-.801-.267-1.417-.801-1.848-.513-.431-1.171-.647-1.971-.647-.842 0-1.52.216-2.033.647-.514.43-.77 1.047-.77 1.848 0 .8.256 1.417.77 1.848.513.431 1.191.647 2.033.647ZM106 29.843c0 .76.349 1.324 1.048 1.694.718.39 1.591.585 2.618.585.985 0 1.786-.205 2.402-.616.616-.39.924-.924.924-1.602 0-.554-.205-1.016-.616-1.386-.39-.37-1.18-.595-2.371-.677a24.434 24.434 0 0 1-2.341-.277c-.596.328-1.027.688-1.294 1.078-.246.39-.37.79-.37 1.2Zm21.494-1.51c-1.478 0-2.813-.338-4.004-1.016a7.64 7.64 0 0 1-2.803-2.803c-.678-1.211-1.017-2.608-1.017-4.189s.349-2.967 1.048-4.158c.698-1.212 1.632-2.156 2.803-2.834 1.191-.678 2.525-1.016 4.004-1.016 1.458 0 2.772.338 3.942 1.016a7.287 7.287 0 0 1 2.803 2.834c.699 1.19 1.048 2.577 1.048 4.158 0 1.581-.349 2.978-1.048 4.19a7.347 7.347 0 0 1-2.803 2.802c-1.191.678-2.515 1.017-3.973 1.017Zm0-3.418c1.027 0 1.92-.38 2.68-1.14.76-.78 1.139-1.93 1.139-3.45 0-1.52-.379-2.66-1.139-3.419-.76-.78-1.643-1.17-2.649-1.17-1.047 0-1.951.39-2.711 1.17-.739.76-1.109 1.9-1.109 3.42 0 1.519.37 2.669 1.109 3.449.76.76 1.653 1.14 2.68 1.14Z"
        fill="currentColor"
      />
      <path
        d="M38.406 27.964h-.496v.496h.496v-.496Zm0-15.278v-.496h-.496v.496h.496Zm3.48 0 .494-.058-.053-.438h-.44v.496Zm.309 2.588-.493.058.19 1.593.743-1.421-.44-.23Zm2.033-2.156-.253-.428-.004.003.257.425Zm7.577.985-.373.328.373-.328Zm1.57 13.861v.496h.497v-.496h-.496Zm-3.942 0h-.496v.496h.496v-.496Zm-.8-11.273.394-.302-.395.302Zm-5.237.123-.365-.337-.005.006.37.33Zm-1.047 11.15v.496h.496v-.496h-.496Zm-3.446 0V12.686h-.993v15.278h.993Zm-.497-14.781h3.48v-.993h-3.48v.993Zm2.988-.438.308 2.587.986-.117-.308-2.587-.986.117Zm1.24 2.759a4.907 4.907 0 0 1 1.85-1.962l-.513-.85a5.9 5.9 0 0 0-2.216 2.352l.88.46Zm1.846-1.96c.816-.481 1.784-.73 2.92-.73v-.994c-1.286 0-2.434.284-3.425.87l.505.855Zm2.92-.73c1.777 0 3.097.554 4.032 1.617l.746-.656c-1.16-1.318-2.776-1.955-4.778-1.955v.993Zm4.032 1.617c.938 1.067 1.447 2.676 1.447 4.909h.993c0-2.368-.538-4.25-1.694-5.565l-.746.656Zm1.447 4.909v8.624h.993V19.34h-.993Zm.497 8.128h-3.943v.992h3.943v-.992Zm-3.447.496v-8.255h-.992v8.255h.992Zm0-8.255c0-1.372-.277-2.502-.902-3.32l-.789.603c.442.578.699 1.46.699 2.717h.992Zm-.902-3.32c-.654-.855-1.654-1.242-2.89-1.242v.993c1.023 0 1.687.31 2.101.852l.789-.603Zm-2.89-1.242c-1.24 0-2.289.443-3.106 1.33l.73.673c.62-.673 1.4-1.01 2.376-1.01v-.993Zm-3.111 1.336c-.804.898-1.174 2.119-1.174 3.596h.993c0-1.316.328-2.272.92-2.934l-.739-.662Zm-1.174 3.596v7.885h.993v-7.885h-.993Zm.497 7.389h-3.943v.992h3.943v-.992Zm16.83.25-.227.442.01.004.217-.446Zm-1.88-1.695-.427.252.428-.252Zm1.048-5.76.31.389-.31-.389Zm8.871-1.324v.497h.496v-.497h-.496Zm-.893-2.68.316-.382-.316.382Zm-4.313-.154.262.422.01-.007-.271-.415Zm-1.108 1.664v.496h.409l.078-.402-.487-.094Zm-3.85 0-.495-.046-.05.542h.544v-.496Zm1.108-2.896-.387-.31-.005.006.392.304Zm2.526-1.879.192.458.008-.003-.2-.455Zm8.594.955-.326.375.326-.375Zm1.879 14.015v.496h.496v-.496h-.496Zm-3.358 0-.49.074.063.422h.427v-.496Zm-.37-2.464.492-.074-.218-1.453-.708 1.288.435.239Zm-1.91 2.033-.27-.417-.004.004.275.413Zm.401-3.388-.376-.324-.005.006.381.318Zm1.202-2.742.49.074.087-.57h-.577v.496Zm-5.606.585.314.385.01-.009-.324-.376Zm0 2.773.292-.402-.292.402Zm.893 3.076c-1.267 0-2.264-.198-3.017-.566l-.435.893c.931.454 2.09.666 3.452.666v-.993Zm-3.008-.561c-.772-.396-1.322-.9-1.677-1.504l-.856.503c.466.792 1.169 1.418 2.08 1.884l.453-.883Zm-1.677-1.504a3.977 3.977 0 0 1-.548-2.059h-.993c0 .927.228 1.785.685 2.562l.856-.503Zm-.548-2.059c0-1.265.486-2.272 1.476-3.061l-.618-.777c-1.227.977-1.85 2.27-1.85 3.838h.992Zm1.476-3.061c.984-.783 2.516-1.216 4.681-1.216v-.993c-2.27 0-4.065.45-5.3 1.432l.62.777Zm4.681-1.216h3.881v-.993h-3.881v.992Zm4.377-.497v-.37h-.992v.37h.992Zm0-.37c0-1.14-.326-2.075-1.073-2.692l-.633.765c.445.368.714.973.714 1.927h.992Zm-1.073-2.692c-.697-.577-1.553-.853-2.534-.853v.993c.785 0 1.407.216 1.901.625l.633-.765Zm-2.534-.853c-.885 0-1.68.217-2.367.666l.545.83c.504-.33 1.105-.503 1.822-.503v-.993Zm-2.356.66c-.723.448-1.167 1.126-1.335 1.99l.975.19c.12-.616.415-1.046.883-1.337l-.523-.844Zm-.847 1.588h-3.85v.993h3.85v-.993Zm-3.356.542c.094-1.021.432-1.895 1.007-2.637l-.785-.608c-.699.902-1.1 1.958-1.21 3.154l.988.091Zm1.002-2.63c.602-.753 1.375-1.33 2.33-1.732l-.384-.915c-1.099.461-2.01 1.136-2.721 2.026l.775.62Zm2.338-1.735c.956-.42 2.036-.636 3.25-.636v-.993c-1.333 0-2.552.237-3.65.72l.4.909Zm3.25-.636c2.095 0 3.68.523 4.818 1.51l.651-.749c-1.368-1.188-3.21-1.754-5.47-1.754v.993Zm4.818 1.51c1.123.976 1.708 2.367 1.708 4.246h.993c0-2.104-.667-3.793-2.05-4.995l-.65.75Zm1.708 4.246v9.395h.993v-9.395h-.993Zm.497 8.899h-3.358v.992h3.358v-.992Zm-2.867.422-.37-2.464-.981.148.37 2.464.981-.148ZM67 25.26a5.154 5.154 0 0 1-1.746 1.857l.541.832a6.145 6.145 0 0 0 2.075-2.21l-.87-.478Zm-1.75 1.86c-.697.464-1.63.717-2.836.717v.993c1.34 0 2.481-.28 3.386-.884l-.55-.826Zm-1.943-1.37c1.249 0 2.273-.415 3-1.288l-.763-.635c-.505.606-1.226.93-2.237.93v.993Zm2.995-1.282c.705-.818 1.14-1.822 1.316-2.99l-.982-.149c-.152 1.008-.519 1.832-1.087 2.492l.752.647Zm.825-3.561h-3.358v.993h3.358v-.993Zm-3.358 0c-1.085 0-1.984.197-2.573.706l.65.751c.314-.272.914-.464 1.923-.464v-.993Zm-2.563.697c-.56.458-.86 1.058-.86 1.77h.994c0-.396.151-.72.495-1.001l-.629-.769Zm-.86 1.77c0 .743.293 1.36.883 1.788l.584-.803c-.314-.228-.473-.536-.473-.985h-.993Zm.883 1.788c.56.408 1.268.588 2.078.588v-.993c-.668 0-1.151-.148-1.494-.398l-.584.803Zm13.695 9.578h-.496v.497h.496v-.497Zm0-22.054v-.496h-.496v.496h.496Zm3.511 0 .487-.096-.079-.4h-.407v.496Zm.432 2.187-.487.096.22 1.115.668-.919-.401-.292Zm1.94-1.786-.263-.421-.005.003.268.418Zm7.023.277.261-.422-.261.422Zm2.68 2.864-.437.237.437-.236Zm0 8.255.434.24.002-.003-.436-.237Zm-2.68 2.834.255.426.006-.004-.261-.422Zm-8.963-1.448.41-.28-.907-1.324v1.604h.497Zm0 8.871v.497h.496v-.497h-.496Zm7.392-11.12.355.348-.355-.347Zm0-6.56.36-.342-.36.342Zm-6.253 0-.36-.342.36.342Zm0 6.56-.364.339.009.009.355-.347ZM75.42 34.74V12.686h-.993V34.74h.992Zm-.497-21.557h3.511v-.993h-3.51v.993Zm3.024-.4.432 2.186.974-.192-.431-2.187-.975.192Zm1.32 2.382c.452-.621 1.051-1.176 1.807-1.66l-.536-.836c-.846.542-1.54 1.178-2.074 1.912l.803.584Zm1.802-1.657c.72-.45 1.679-.695 2.91-.695v-.993c-1.356 0-2.513.27-3.436.846l.526.842Zm2.91-.695c1.353 0 2.544.327 3.589.973l.522-.844c-1.214-.751-2.59-1.122-4.111-1.122v.993Zm3.589.973c1.053.651 1.887 1.54 2.504 2.68l.873-.474c-.697-1.285-1.65-2.305-2.855-3.05l-.522.844Zm2.504 2.68c.614 1.13.926 2.423.926 3.89h.993c0-1.613-.345-3.072-1.046-4.364l-.873.473Zm.926 3.89c0 1.467-.312 2.76-.926 3.89l.873.474c.701-1.292 1.046-2.751 1.046-4.364h-.993Zm-.924 3.888a7.068 7.068 0 0 1-2.506 2.65l.522.845a8.06 8.06 0 0 0 2.853-3.016l-.869-.48Zm-2.5 2.648c-1.046.627-2.24.945-3.595.945v.993c1.519 0 2.892-.36 4.105-1.087l-.51-.851Zm-3.595.945c-1.088 0-2.015-.203-2.797-.594l-.444.888c.944.471 2.028.699 3.24.699v-.993Zm-2.797-.594a4.945 4.945 0 0 1-1.907-1.654l-.819.56a5.938 5.938 0 0 0 2.282 1.982l.444-.888ZM78.37 25.87v8.87h.993v-8.87h-.993Zm.497 8.374h-3.943v.993h3.943v-.993Zm4.281-8.864c1.377 0 2.545-.468 3.466-1.412l-.71-.694c-.722.74-1.627 1.113-2.756 1.113v.993Zm3.466-1.412c.925-.948 1.374-2.167 1.374-3.612h-.993c0 1.224-.373 2.182-1.091 2.918l.71.694Zm1.374-3.612c0-1.446-.45-2.672-1.37-3.638l-.718.684c.722.76 1.095 1.73 1.095 2.954h.993Zm-1.37-3.638c-.92-.967-2.09-1.448-3.47-1.448v.993c1.125 0 2.03.381 2.752 1.14l.719-.685Zm-3.47-1.448c-1.398 0-2.58.48-3.501 1.448l.719.684c.72-.756 1.634-1.14 2.782-1.14v-.992Zm-3.501 1.448c-.902.948-1.338 2.165-1.338 3.607h.992c0-1.228.365-2.187 1.065-2.923l-.72-.684Zm-1.338 3.607c0 1.442.436 2.667 1.334 3.634l.727-.676c-.704-.758-1.069-1.73-1.069-2.958h-.992Zm1.342 3.643c.923.946 2.102 1.412 3.497 1.412v-.993c-1.151 0-2.067-.375-2.786-1.113l-.711.694Zm15.705-14.3-.343.359.008.007.335-.366Zm0-3.234.334.367-.334-.367Zm3.542 0-.342.359.008.008.009.007.325-.374Zm0 3.234-.334-.367-.008.008.342.359ZM95.17 27.964h-.496v.496h.496v-.496Zm0-15.278v-.496h-.496v.496h.496Zm3.943 0h.496v-.496h-.496v.496Zm0 15.278v.496h.496v-.496h-.496ZM97.142 9.818c-.612 0-1.083-.18-1.452-.517l-.67.733c.576.525 1.296.777 2.122.777v-.993Zm-1.444-.51c-.348-.332-.524-.743-.524-1.273h-.993c0 .785.276 1.462.832 1.992l.685-.718Zm-.524-1.273c0-.529.175-.925.515-1.234l-.668-.735c-.564.513-.84 1.184-.84 1.97h.993ZM95.69 6.8c.37-.337.84-.517 1.452-.517V5.29c-.826 0-1.546.252-2.121.777l.669.733Zm1.452-.517c.612 0 1.067.18 1.413.51l.685-.719c-.558-.532-1.273-.784-2.098-.784v.993Zm1.43.525c.358.311.537.706.537 1.227h.993c0-.792-.292-1.466-.879-1.976l-.651.75Zm.537 1.227c0 .522-.18.932-.546 1.266l.67.733c.578-.528.869-1.207.869-1.999h-.993Zm-.554 1.274c-.346.33-.802.51-1.413.51v.992c.825 0 1.54-.252 2.098-.784l-.685-.718Zm-2.888 18.655V12.686h-.993v15.278h.993Zm-.497-14.781h3.943v-.993H95.17v.993Zm3.447-.497v15.278h.992V12.686h-.992Zm.496 14.782H95.17v.992h3.943v-.992Zm8.52-4.31.124-.48-.275-.07-.2.2.351.35Zm-1.14 1.14-.351-.35-.475.475.594.314.232-.438Zm1.417.463-.1.486.1-.486Zm2.895.37-.045.494h.001l.044-.495Zm4.436 1.447-.32.38.32-.38Zm.647 5.79-.423-.26-.003.005.426.256Zm-2.28 1.972-.214-.448-.008.004.222.444Zm-9.209-.462.26-.423-.005-.003-.255.426Zm0-7.208.299.397.669-.505-.765-.344-.203.452Zm-1.078-.585-.289.404.007.005.006.004.276-.413Zm-.77-.647h-.497v.206l.146.145.351-.35Zm0-.708-.361-.341-.136.143v.198h.497Zm2.679-2.834.361.341.354-.374-.387-.34-.328.373Zm-1.047-6.838-.424-.258-.004.007.428.251Zm2.156-2.002-.233-.438.233.438Zm5.76-.37-.157.471.077.026h.08v-.497Zm5.791 0h.496v-.496h-.496v.496Zm0 2.403.035.495.461-.033v-.462h-.496Zm-2.618.185-.035-.495-.759.053.354.673.44-.231Zm-.123 5.39-.429-.25.429.25Zm-2.157 2.002-.229-.44-.004.002.233.438Zm-1.324-2.926-.312-.386-.007.006.319.38Zm0-3.696-.319.38.007.006.312-.386Zm-4.004 0-.32-.38.32.38Zm0 3.696.319-.38-.319.38Zm-.616 11.797.236-.436-.004-.003-.232.439Zm5.02-.03-.265-.42-.01.006.275.413Zm.308-2.989-.341.36.009.01.332-.37Zm-2.371-.677-.037.495h.002l.035-.495Zm-2.341-.277.084-.49-.172-.03-.152.085.24.435Zm-1.294 1.078-.41-.28-.005.007-.005.008.42.265Zm3.327-5.733a7.743 7.743 0 0 1-1.94-.23l-.248.96a8.74 8.74 0 0 0 2.188.263v-.993Zm-2.415-.101-1.14 1.14.702.702 1.14-1.14-.702-.702Zm-1.021 1.93c.406.215.929.38 1.549.509l.201-.973c-.572-.118-.994-.26-1.286-.414l-.464.877Zm1.549.509c.624.129 1.613.254 2.95.378l.091-.99c-1.333-.122-2.274-.243-2.84-.36l-.201.972Zm2.951.378c1.994.18 3.351.649 4.16 1.332l.64-.758c-1.039-.878-2.639-1.375-4.711-1.563l-.089.989Zm4.16 1.332c.796.673 1.21 1.603 1.21 2.855h.992c0-1.5-.51-2.725-1.562-3.613l-.64.758Zm1.21 2.855a4.3 4.3 0 0 1-.666 2.296l.846.52a5.3 5.3 0 0 0 .812-2.816h-.992Zm-.669 2.301c-.434.724-1.112 1.32-2.068 1.78l.429.895c1.098-.527 1.939-1.245 2.49-2.164l-.851-.51Zm-2.076 1.783c-.936.468-2.167.718-3.72.718v.992c1.65 0 3.047-.263 4.164-.822l-.444-.888Zm-3.72.718c-2.119 0-3.775-.4-5.007-1.159l-.52.846c1.437.884 3.293 1.305 5.527 1.305v-.992Zm-5.012-1.162c-1.178-.706-1.761-1.752-1.761-3.209h-.993c0 1.788.751 3.165 2.243 4.06l.511-.85Zm-1.761-3.209c0-1.186.564-2.241 1.805-3.176l-.598-.793c-1.429 1.077-2.2 2.404-2.2 3.97h.993Zm1.709-4.025a7.02 7.02 0 0 1-1.006-.546l-.551.826c.335.223.719.431 1.15.625l.407-.905Zm-.993-.537a5.583 5.583 0 0 1-.707-.594l-.702.702c.247.247.525.48.832.7l.577-.808Zm-.562-.243v-.708h-.993v.708h.993Zm-.136-.367 2.68-2.834-.721-.682-2.68 2.834.721.682Zm2.647-3.548c-1.079-.949-1.618-2.156-1.618-3.662h-.993c0 1.78.653 3.262 1.956 4.408l.655-.746Zm-1.618-3.662c0-.943.226-1.79.671-2.552l-.856-.502c-.54.922-.808 1.944-.808 3.054h.993Zm.667-2.545c.464-.76 1.115-1.368 1.966-1.822l-.467-.876c-.998.532-1.784 1.26-2.347 2.182l.848.516Zm1.966-1.822c.836-.446 1.871-.68 3.124-.68v-.994c-1.376 0-2.579.258-3.591.798l.467.876Zm3.124-.68c.814 0 1.562.115 2.245.343l.314-.942a8.046 8.046 0 0 0-2.559-.395v.993Zm2.402.369h5.791v-.993h-5.791v.993Zm5.294-.497v2.403h.993v-2.403h-.993Zm.462 1.908-2.618.184.07.99 2.618-.184-.07-.99Zm-3.023.91c.371.705.559 1.487.559 2.357h.993c0-1.02-.222-1.962-.673-2.819l-.879.463Zm.559 2.357c0 .943-.225 1.79-.671 2.552l.857.502c.54-.922.807-1.944.807-3.054h-.993Zm-.671 2.552c-.441.754-1.087 1.36-1.957 1.813l.459.88c1.019-.532 1.811-1.261 2.355-2.191l-.857-.502Zm-1.961 1.815c-.838.447-1.853.68-3.062.68v.994c1.337 0 2.519-.26 3.529-.798l-.467-.876Zm-3.062-1.345c.894 0 1.671-.243 2.29-.763l-.638-.76c-.408.342-.945.53-1.652.53v.993Zm2.283-.757c.671-.542.985-1.311.985-2.234h-.993c0 .679-.219 1.141-.616 1.462l.624.772Zm.985-2.234c0-.923-.314-1.693-.985-2.234l-.624.772c.397.32.616.783.616 1.462h.993Zm-.978-2.228c-.619-.52-1.396-.764-2.29-.764v.993c.707 0 1.244.189 1.652.53l.638-.76Zm-2.29-.764c-.928 0-1.729.24-2.353.764l.639.76c.403-.339.958-.53 1.714-.53V14.9Zm-2.353.764c-.647.544-.947 1.312-.947 2.228h.993c0-.686.214-1.15.593-1.468l-.639-.76Zm-.947 2.228c0 .916.3 1.684.947 2.228l.639-.76c-.379-.319-.593-.782-.593-1.468h-.993Zm.947 2.228c.624.524 1.425.763 2.353.763v-.993c-.756 0-1.311-.192-1.714-.53l-.639.76Zm-1.84 9.723c0 .458.106.883.336 1.254.229.37.563.66.975.879l.465-.878c-.286-.151-.476-.329-.596-.523a1.36 1.36 0 0 1-.187-.732h-.993Zm1.307 2.13c.808.439 1.766.646 2.855.646v-.993c-.965 0-1.752-.183-2.382-.525l-.473.872Zm2.855.646c1.052 0 1.957-.22 2.678-.7l-.551-.826c-.512.341-1.208.533-2.127.533v.993Zm2.668-.693c.747-.473 1.155-1.159 1.155-2.021h-.993c0 .492-.208.874-.693 1.182l.531.839Zm1.155-2.021c0-.695-.265-1.291-.781-1.756l-.664.738c.306.276.452.603.452 1.017h.993Zm-.771-1.747c-.276-.261-.656-.44-1.091-.564-.44-.125-.972-.206-1.588-.248l-.069.99c.575.04 1.034.113 1.384.213.356.102.567.221.681.33l.683-.72Zm-2.677-.812a23.912 23.912 0 0 1-2.293-.272l-.168.979c.737.126 1.533.22 2.388.283l.073-.99Zm-2.617-.217c-.636.35-1.138.756-1.464 1.232l.82.56c.208-.303.568-.616 1.123-.923l-.479-.87Zm-1.474 1.248c-.29.459-.446.95-.446 1.466h.993c0-.306.09-.615.293-.936l-.84-.53Zm17.54-1.06-.249.43.003.002.246-.432Zm-2.803-2.803-.433.243.005.008.428-.25Zm.031-8.347.428.25.002-.002-.43-.248Zm2.803-2.834-.246-.431-.003.002.249.43Zm7.946 0-.248.43.003.002.245-.432Zm2.803 2.834-.433.242.005.009.428-.251Zm0 8.347-.43-.248-.001.003.431.245Zm-2.803 2.803-.245-.431.245.431Zm-1.293-3.542.351.351.004-.005-.355-.346Zm0-6.869-.356.347.005.004.351-.35Zm-5.36 0-.355-.346h-.001l.356.346Zm0 6.869-.36.341.009.01.351-.351Zm2.68 4.062c-1.399 0-2.648-.32-3.759-.951l-.491.863c1.272.723 2.692 1.081 4.25 1.081v-.993Zm-3.755-.95a7.15 7.15 0 0 1-2.624-2.624l-.856.502a8.138 8.138 0 0 0 2.982 2.982l.498-.86Zm-2.619-2.615c-.631-1.128-.953-2.439-.953-3.947h-.993c0 1.654.355 3.136 1.08 4.431l.866-.484Zm-.953-3.947c0-1.506.331-2.803.979-3.907l-.857-.502c-.749 1.277-1.115 2.753-1.115 4.41h.993Zm.981-3.91c.656-1.139 1.529-2.02 2.621-2.652l-.497-.86c-1.249.723-2.244 1.732-2.984 3.016l.86.496Zm2.618-2.65c1.11-.632 2.359-.952 3.759-.952v-.993c-1.558 0-2.978.358-4.25 1.082l.491.863Zm3.759-.952c1.377 0 2.605.32 3.694.95l.497-.86c-1.252-.724-2.653-1.083-4.191-1.083v.993Zm3.697.952a6.796 6.796 0 0 1 2.615 2.644l.867-.484a7.79 7.79 0 0 0-2.991-3.023l-.491.863Zm2.62 2.653c.648 1.104.979 2.401.979 3.907h.993c0-1.656-.366-3.131-1.115-4.41l-.857.503Zm.979 3.907c0 1.506-.331 2.815-.981 3.941l.861.496c.747-1.296 1.113-2.78 1.113-4.437h-.993Zm-.982 3.944a6.86 6.86 0 0 1-2.617 2.617l.491.863a7.846 7.846 0 0 0 2.989-2.99l-.863-.49Zm-2.617 2.617c-1.111.632-2.35.951-3.728.951v.993c1.538 0 2.948-.358 4.219-1.081l-.491-.863Zm-3.728-1.475c1.165 0 2.183-.437 3.031-1.285l-.702-.702c-.672.671-1.441.994-2.329.994v.993Zm3.035-1.29c.881-.904 1.281-2.199 1.281-3.796h-.993c0 1.442-.36 2.447-.999 3.104l.711.692Zm1.281-3.796c0-1.596-.399-2.884-1.285-3.77l-.702.702c.634.634.994 1.625.994 3.068h.993Zm-1.281-3.765c-.844-.868-1.852-1.32-3.004-1.32v.992c.86 0 1.618.327 2.293 1.02l.711-.692Zm-3.004-1.32c-1.187 0-2.217.448-3.066 1.32l.711.692c.67-.688 1.447-1.02 2.355-1.02v-.993Zm-3.067 1.32c-.862.886-1.249 2.172-1.249 3.765h.993c0-1.446.352-2.44.968-3.073l-.712-.692Zm-1.249 3.765c0 1.594.388 2.887 1.245 3.791l.721-.683c-.622-.655-.973-1.663-.973-3.108h-.993Zm1.254 3.801c.848.848 1.866 1.285 3.031 1.285v-.993c-.888 0-1.657-.323-2.329-.994l-.702.702Z"
        fill="currentColor"
      />
      <rect width={22.906} height={34.252} rx={3.425} fill="url(#a)" />
      <g filter="url(#b)">
        <path
          d="M7.707 13.487a2.14 2.14 0 0 1 2.14-2.141h18.839a2.14 2.14 0 0 1 2.14 2.14v18.625a2.14 2.14 0 0 1-2.14 2.14H7.706V13.488Z"
          fill="#037C66"
        />
      </g>
      <defs>
        <linearGradient id="a" x1={0} y1={0} x2={44.489} y2={21.803} gradientUnits="userSpaceOnUse">
          <stop stopColor="#29AE96" />
          <stop offset={1} stopColor="#5AB8A7" />
        </linearGradient>
        <filter
          id="b"
          x={3.211}
          y={6.85}
          width={27.615}
          height={27.401}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology radius={1.499} in="SourceAlpha" result="effect1_dropShadow_593_9304" />
          <feOffset dx={-2.355} dy={-2.355} />
          <feGaussianBlur stdDeviation={1.82} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_593_9304" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_593_9304" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
