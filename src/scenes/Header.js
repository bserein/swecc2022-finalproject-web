import React from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Header() {
    const navigate = useNavigate();
    
      const AddNew = () => {
        navigate('/cars/addcar')
      }

      const handleLogout = () => {
        // setUser({});
        // setUsername("");
        // setPassword("");
        localStorage.clear();
      };

    return (
        <section style={{ position: "center", zIndex: 999, width: "100%", backgroundColor: "orange", opacity: "85%"}}>
        <Link to={`/cars`}>
             <svg width="310" height="50" viewBox="0 0 310 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M123.691 29.4688H130.02C129.915 31.4219 129.382 33.1471 128.418 34.6445C127.467 36.1289 126.146 37.2943 124.453 38.1406C122.76 38.974 120.749 39.3906 118.418 39.3906C116.556 39.3906 114.889 39.0716 113.418 38.4336C111.947 37.7956 110.697 36.8841 109.668 35.6992C108.652 34.5013 107.871 33.0625 107.324 31.3828C106.79 29.6901 106.523 27.7826 106.523 25.6602V23.9219C106.523 21.7995 106.803 19.8919 107.363 18.1992C107.923 16.5065 108.724 15.0612 109.766 13.8633C110.807 12.6654 112.057 11.7474 113.516 11.1094C114.974 10.4714 116.602 10.1523 118.398 10.1523C120.82 10.1523 122.865 10.5885 124.531 11.4609C126.198 12.3333 127.487 13.5312 128.398 15.0547C129.323 16.5781 129.876 18.3164 130.059 20.2695H123.711C123.659 19.1628 123.451 18.2318 123.086 17.4766C122.721 16.7083 122.161 16.1289 121.406 15.7383C120.651 15.3477 119.648 15.1523 118.398 15.1523C117.487 15.1523 116.686 15.3216 115.996 15.6602C115.319 15.9987 114.753 16.526 114.297 17.2422C113.854 17.9583 113.522 18.8698 113.301 19.9766C113.079 21.0703 112.969 22.3724 112.969 23.8828V25.6602C112.969 27.1576 113.066 28.4531 113.262 29.5469C113.457 30.6406 113.77 31.5456 114.199 32.2617C114.642 32.9779 115.208 33.5117 115.898 33.8633C116.589 34.2148 117.428 34.3906 118.418 34.3906C119.551 34.3906 120.495 34.2148 121.25 33.8633C122.005 33.4987 122.585 32.9518 122.988 32.2227C123.392 31.4935 123.626 30.5755 123.691 29.4688ZM144.434 33.9609V24.8984C144.434 24.2604 144.336 23.7135 144.141 23.2578C143.945 22.8021 143.639 22.444 143.223 22.1836C142.806 21.9232 142.266 21.793 141.602 21.793C141.042 21.793 140.553 21.8906 140.137 22.0859C139.733 22.2812 139.421 22.5612 139.199 22.9258C138.991 23.2904 138.887 23.7396 138.887 24.2734H132.793C132.793 23.3229 133.008 22.4375 133.438 21.6172C133.867 20.7969 134.479 20.0742 135.273 19.4492C136.081 18.8242 137.044 18.3424 138.164 18.0039C139.284 17.6523 140.54 17.4766 141.934 17.4766C143.587 17.4766 145.059 17.7565 146.348 18.3164C147.65 18.8633 148.678 19.6901 149.434 20.7969C150.189 21.8906 150.566 23.2708 150.566 24.9375V33.7852C150.566 35.0612 150.638 36.0638 150.781 36.793C150.938 37.5091 151.159 38.1341 151.445 38.668V39H145.293C145.007 38.388 144.792 37.6328 144.648 36.7344C144.505 35.8229 144.434 34.8984 144.434 33.9609ZM145.195 26.1094L145.234 29.4688H142.207C141.53 29.4688 140.944 29.5534 140.449 29.7227C139.967 29.8919 139.577 30.1263 139.277 30.4258C138.978 30.7122 138.757 31.0508 138.613 31.4414C138.483 31.819 138.418 32.2357 138.418 32.6914C138.418 33.1211 138.522 33.5117 138.73 33.8633C138.939 34.2018 139.225 34.4688 139.59 34.6641C139.954 34.8594 140.378 34.957 140.859 34.957C141.654 34.957 142.331 34.8008 142.891 34.4883C143.464 34.1758 143.906 33.7982 144.219 33.3555C144.531 32.8997 144.688 32.4766 144.688 32.0859L146.152 34.625C145.918 35.1458 145.632 35.6862 145.293 36.2461C144.954 36.793 144.525 37.3073 144.004 37.7891C143.483 38.2578 142.852 38.6419 142.109 38.9414C141.38 39.2409 140.501 39.3906 139.473 39.3906C138.145 39.3906 136.94 39.1237 135.859 38.5898C134.779 38.043 133.913 37.2943 133.262 36.3438C132.624 35.3932 132.305 34.2995 132.305 33.0625C132.305 31.9557 132.507 30.9727 132.91 30.1133C133.314 29.2539 133.919 28.5247 134.727 27.9258C135.547 27.3268 136.576 26.8776 137.812 26.5781C139.049 26.2656 140.495 26.1094 142.148 26.1094H145.195ZM160.684 22.7891V39H154.59V17.8672H160.312L160.684 22.7891ZM166.992 17.7109L166.895 23.3945C166.634 23.3555 166.296 23.3229 165.879 23.2969C165.462 23.2578 165.104 23.2383 164.805 23.2383C164.023 23.2383 163.346 23.3359 162.773 23.5312C162.214 23.7135 161.745 23.987 161.367 24.3516C161.003 24.7161 160.729 25.1719 160.547 25.7188C160.365 26.2526 160.273 26.8711 160.273 27.5742L159.121 27.0078C159.121 25.6146 159.258 24.3385 159.531 23.1797C159.805 22.0208 160.202 21.0182 160.723 20.1719C161.243 19.3125 161.882 18.6484 162.637 18.1797C163.392 17.7109 164.251 17.4766 165.215 17.4766C165.527 17.4766 165.846 17.4961 166.172 17.5352C166.497 17.5742 166.771 17.6328 166.992 17.7109ZM198.848 22.0078V26.9297H184.121V22.0078H198.848ZM186.133 10.5625V39H179.766V10.5625H186.133ZM203.242 10.5625V39H196.895V10.5625H203.242ZM206.777 28.6484V28.2383C206.777 26.6888 206.999 25.263 207.441 23.9609C207.884 22.6458 208.535 21.5065 209.395 20.543C210.254 19.5794 211.309 18.8307 212.559 18.2969C213.809 17.75 215.241 17.4766 216.855 17.4766C218.496 17.4766 219.941 17.75 221.191 18.2969C222.454 18.8307 223.516 19.5794 224.375 20.543C225.234 21.5065 225.885 22.6458 226.328 23.9609C226.771 25.263 226.992 26.6888 226.992 28.2383V28.6484C226.992 30.1849 226.771 31.6107 226.328 32.9258C225.885 34.2279 225.234 35.3672 224.375 36.3438C223.516 37.3073 222.461 38.056 221.211 38.5898C219.961 39.1237 218.522 39.3906 216.895 39.3906C215.28 39.3906 213.841 39.1237 212.578 38.5898C211.315 38.056 210.254 37.3073 209.395 36.3438C208.535 35.3672 207.884 34.2279 207.441 32.9258C206.999 31.6107 206.777 30.1849 206.777 28.6484ZM212.891 28.2383V28.6484C212.891 29.4818 212.956 30.263 213.086 30.9922C213.229 31.7214 213.457 32.3594 213.77 32.9062C214.082 33.4531 214.492 33.8828 215 34.1953C215.521 34.4948 216.152 34.6445 216.895 34.6445C217.637 34.6445 218.262 34.4948 218.77 34.1953C219.277 33.8828 219.688 33.4531 220 32.9062C220.312 32.3594 220.534 31.7214 220.664 30.9922C220.807 30.263 220.879 29.4818 220.879 28.6484V28.2383C220.879 27.418 220.807 26.6497 220.664 25.9336C220.534 25.2044 220.312 24.5599 220 24C219.688 23.4401 219.271 23.0039 218.75 22.6914C218.242 22.3789 217.611 22.2227 216.855 22.2227C216.126 22.2227 215.508 22.3789 215 22.6914C214.492 23.0039 214.082 23.4401 213.77 24C213.457 24.5599 213.229 25.2044 213.086 25.9336C212.956 26.6497 212.891 27.418 212.891 28.2383ZM236.309 21.9297V47.125H230.215V17.8672H235.898L236.309 21.9297ZM249.492 28.1992V28.6094C249.492 30.1458 249.316 31.5716 248.965 32.8867C248.613 34.1888 248.086 35.3281 247.383 36.3047C246.693 37.2812 245.84 38.043 244.824 38.5898C243.809 39.1237 242.63 39.3906 241.289 39.3906C240.013 39.3906 238.906 39.1237 237.969 38.5898C237.044 38.043 236.263 37.2878 235.625 36.3242C235 35.3477 234.492 34.2344 234.102 32.9844C233.724 31.7214 233.431 30.3737 233.223 28.9414V28.1406C233.431 26.6172 233.73 25.2044 234.121 23.9023C234.512 22.6003 235.02 21.474 235.645 20.5234C236.27 19.5599 237.044 18.8112 237.969 18.2773C238.893 17.7435 239.993 17.4766 241.27 17.4766C242.598 17.4766 243.776 17.7305 244.805 18.2383C245.833 18.7461 246.693 19.4753 247.383 20.4258C248.086 21.3633 248.613 22.4896 248.965 23.8047C249.316 25.1198 249.492 26.5846 249.492 28.1992ZM243.379 28.6094V28.1992C243.379 27.3398 243.314 26.5521 243.184 25.8359C243.053 25.1068 242.845 24.4753 242.559 23.9414C242.272 23.3945 241.895 22.9714 241.426 22.6719C240.957 22.3724 240.384 22.2227 239.707 22.2227C238.978 22.2227 238.359 22.3398 237.852 22.5742C237.344 22.8086 236.934 23.1536 236.621 23.6094C236.309 24.0521 236.081 24.599 235.938 25.25C235.807 25.901 235.736 26.6432 235.723 27.4766V29.625C235.736 30.6016 235.872 31.474 236.133 32.2422C236.406 32.9974 236.829 33.5898 237.402 34.0195C237.988 34.4362 238.77 34.6445 239.746 34.6445C240.436 34.6445 241.009 34.4948 241.465 34.1953C241.934 33.8828 242.305 33.4466 242.578 32.8867C242.865 32.3268 243.066 31.6823 243.184 30.9531C243.314 30.224 243.379 29.4427 243.379 28.6094ZM258.848 21.9297V47.125H252.754V17.8672H258.438L258.848 21.9297ZM272.031 28.1992V28.6094C272.031 30.1458 271.855 31.5716 271.504 32.8867C271.152 34.1888 270.625 35.3281 269.922 36.3047C269.232 37.2812 268.379 38.043 267.363 38.5898C266.348 39.1237 265.169 39.3906 263.828 39.3906C262.552 39.3906 261.445 39.1237 260.508 38.5898C259.583 38.043 258.802 37.2878 258.164 36.3242C257.539 35.3477 257.031 34.2344 256.641 32.9844C256.263 31.7214 255.97 30.3737 255.762 28.9414V28.1406C255.97 26.6172 256.27 25.2044 256.66 23.9023C257.051 22.6003 257.559 21.474 258.184 20.5234C258.809 19.5599 259.583 18.8112 260.508 18.2773C261.432 17.7435 262.533 17.4766 263.809 17.4766C265.137 17.4766 266.315 17.7305 267.344 18.2383C268.372 18.7461 269.232 19.4753 269.922 20.4258C270.625 21.3633 271.152 22.4896 271.504 23.8047C271.855 25.1198 272.031 26.5846 272.031 28.1992ZM265.918 28.6094V28.1992C265.918 27.3398 265.853 26.5521 265.723 25.8359C265.592 25.1068 265.384 24.4753 265.098 23.9414C264.811 23.3945 264.434 22.9714 263.965 22.6719C263.496 22.3724 262.923 22.2227 262.246 22.2227C261.517 22.2227 260.898 22.3398 260.391 22.5742C259.883 22.8086 259.473 23.1536 259.16 23.6094C258.848 24.0521 258.62 24.599 258.477 25.25C258.346 25.901 258.275 26.6432 258.262 27.4766V29.625C258.275 30.6016 258.411 31.474 258.672 32.2422C258.945 32.9974 259.368 33.5898 259.941 34.0195C260.527 34.4362 261.309 34.6445 262.285 34.6445C262.975 34.6445 263.548 34.4948 264.004 34.1953C264.473 33.8828 264.844 33.4466 265.117 32.8867C265.404 32.3268 265.605 31.6823 265.723 30.9531C265.853 30.224 265.918 29.4427 265.918 28.6094ZM285.234 39.3906C283.555 39.3906 282.051 39.1237 280.723 38.5898C279.395 38.056 278.268 37.3203 277.344 36.3828C276.432 35.4323 275.736 34.3385 275.254 33.1016C274.772 31.8646 274.531 30.543 274.531 29.1367V28.3945C274.531 26.819 274.753 25.3672 275.195 24.0391C275.638 22.7109 276.283 21.5586 277.129 20.582C277.988 19.5924 279.043 18.8307 280.293 18.2969C281.543 17.75 282.969 17.4766 284.57 17.4766C286.068 17.4766 287.402 17.724 288.574 18.2188C289.746 18.7005 290.736 19.3971 291.543 20.3086C292.35 21.207 292.962 22.2943 293.379 23.5703C293.809 24.8333 294.023 26.2526 294.023 27.8281V30.3281H276.992V26.4023H288.047V25.9336C288.047 25.1914 287.91 24.5404 287.637 23.9805C287.376 23.4206 286.986 22.9909 286.465 22.6914C285.957 22.3789 285.312 22.2227 284.531 22.2227C283.789 22.2227 283.171 22.3789 282.676 22.6914C282.181 23.0039 281.784 23.4466 281.484 24.0195C281.198 24.5794 280.99 25.237 280.859 25.9922C280.729 26.7344 280.664 27.5352 280.664 28.3945V29.1367C280.664 29.957 280.775 30.7057 280.996 31.3828C281.217 32.0599 281.543 32.6393 281.973 33.1211C282.402 33.6029 282.923 33.9805 283.535 34.2539C284.147 34.5273 284.844 34.6641 285.625 34.6641C286.589 34.6641 287.507 34.4818 288.379 34.1172C289.251 33.7396 290.007 33.1536 290.645 32.3594L293.496 35.6211C293.066 36.2461 292.461 36.8516 291.68 37.4375C290.911 38.0104 289.987 38.4792 288.906 38.8438C287.826 39.2083 286.602 39.3906 285.234 39.3906ZM303.105 22.7891V39H297.012V17.8672H302.734L303.105 22.7891ZM309.414 17.7109L309.316 23.3945C309.056 23.3555 308.717 23.3229 308.301 23.2969C307.884 23.2578 307.526 23.2383 307.227 23.2383C306.445 23.2383 305.768 23.3359 305.195 23.5312C304.635 23.7135 304.167 23.987 303.789 24.3516C303.424 24.7161 303.151 25.1719 302.969 25.7188C302.786 26.2526 302.695 26.8711 302.695 27.5742L301.543 27.0078C301.543 25.6146 301.68 24.3385 301.953 23.1797C302.227 22.0208 302.624 21.0182 303.145 20.1719C303.665 19.3125 304.303 18.6484 305.059 18.1797C305.814 17.7109 306.673 17.4766 307.637 17.4766C307.949 17.4766 308.268 17.4961 308.594 17.5352C308.919 17.5742 309.193 17.6328 309.414 17.7109Z" fill="#022ECC"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M54.9582 0C60.4445 0 63.811 7.85516 66.0557 12.0951L68.9234 10.2246C70.4196 9.35177 72.29 9.72578 73.2877 11.2223C74.4098 12.2199 73.6617 14.5888 72.29 15.4616L69.2975 17.3321C70.6692 18.7038 72.6641 21.4468 72.6641 27.5566C72.7889 34.2898 72.7889 41.0225 72.7889 47.7555C72.7889 49.0023 71.7912 50 70.5444 50H60.5695C59.3226 50 58.325 49.0023 58.325 47.7555V45.0125H15.4323V47.7555C15.4323 49.0023 14.4346 50 13.1878 50H3.21288C1.96604 50 0.968385 49.0023 0.968385 47.7555V27.5566C1.0932 21.4471 3.08813 18.7038 4.33497 17.3321L1.34242 15.4616C-0.0292739 14.5888 -0.403304 12.5939 0.469577 11.2223C1.71641 9.97542 2.96325 9.10251 4.70897 10.2246L7.70153 12.0951C9.94602 7.85568 13.3126 0 18.799 0H54.9582ZM44.6093 40.0245C45.2329 40.0245 45.7314 39.6505 45.7314 39.0268V35.2862C45.7314 34.7874 45.2325 34.2886 44.6093 34.2886H29.1483C28.5246 34.2886 28.0262 34.7874 28.0262 35.2862V39.0268C28.0262 39.6505 28.525 40.0245 29.1483 40.0245H44.6093ZM61.5666 12.5928C60.195 9.97427 58.9481 7.23132 57.5769 4.61279H16.1805C14.8088 7.23132 13.4375 9.97427 12.1907 12.5928C28.3994 15.3358 45.3578 15.3358 61.5664 12.5928H61.5666ZM5.58237 28.8015C10.1958 29.6743 14.6844 30.2976 19.0483 31.2951C20.1704 31.794 20.9188 32.7913 21.542 33.9137C21.7912 34.4125 21.7912 35.1605 21.6668 35.9086C17.3025 35.2849 13.0636 34.5369 8.82406 33.7888C7.45237 33.29 6.33038 32.2927 5.58232 30.9211C5.45751 29.9235 5.45751 29.1754 5.58232 28.8014L5.58237 28.8015ZM68.0507 28.8015C63.5622 29.6743 59.0731 30.2976 54.5848 31.2951C53.5872 31.794 52.7144 32.7913 52.0912 33.9137C51.9663 34.4125 51.9663 35.1605 52.0912 35.9086C56.3305 35.2849 60.6944 34.5369 64.9339 33.7888C66.3056 33.29 67.4275 32.2927 68.1756 30.9211C68.3004 29.9235 68.3004 29.1754 68.0508 28.8014L68.0507 28.8015Z" fill="#022ECC"/>
            </svg>

        </Link>
          <button onClick={AddNew}>Add New Car</button>
          <button onClick={handleLogout}> Sign Out</button>
          </section>
    )
  }