import styled from "styled-components";

import { PrimaryButton } from "components/atoms/button/standard/PrimaryButton";
import { MiniNormalButton } from "components/atoms/button/mini/MiniNormalButton";
import { MiniPrimaryButton } from "components/atoms/button/mini/MiniPrimaryButton";
import editImage from "../../images/edit.svg";
import cancelImage from "../../images/cancel.svg";
import saveImage from "../../images/save.svg";
import Scrollbars from "rc-scrollbars";

export const EditTextInput = () => {
  return (
    <>
    <SContainer>
      <STextArea>
        <Scrollbars className="scrollbars" autoHeight autoHeightMin={500} autoHeightMax={100} >
          <SText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque mollitia totam eveniet assumenda excepturi hic, eos qui nam veritatis voluptatibus delectus ut dolorem in? Pariatur beatae maiores, exercitationem fuga iure nesciunt vero quisquam aperiam facilis quos illum libero repellat soluta, provident quia error voluptates ad labore corporis ipsam dicta iusto! Deleniti sint maiores quis quaerat enim alias dolores ducimus. Velit, rerum asperiores ratione numquam nisi dolor dicta ipsum deserunt repudiandae voluptas nulla mollitia reprehenderit alias! Cumque, optio fugit laboriosam reiciendis obcaecati voluptate magni necessitatibus blanditiis molestias sapiente ipsum nihil, magnam ab dolore natus nesciunt non pariatur quis, repellendus nisi ipsa officiis temporibus quod architecto? Blanditiis hic perferendis minus odio, ea asperiores vero minima mollitia voluptates, ducimus doloremque adipisci dolorem, ullam id itaque ipsam temporibus? Iure temporibus doloribus fugit ullam explicabo iusto officia vel provident eveniet fugiat ex amet corrupti, odit cupiditate excepturi reprehenderit assumenda magnam sed aliquid nesciunt maiores illo modi. Voluptas aliquam debitis atque temporibus aspernatur, cumque in, illum sapiente ipsa mollitia at laborum quidem dignissimos hic esse eum odit ex odio voluptatem ab. Pariatur, qui asperiores suscipit dolorum ipsa nam neque odio ab rerum! Maxime quas cumque expedita minima velit commodi in beatae sed incidunt nostrum, similique quo. Veritatis, suscipit itaque nobis sequi doloribus ad ipsa voluptate ipsum dicta quaerat ducimus veniam consequatur reprehenderit, velit earum maiores molestiae nulla sit libero aspernatur corporis quas. Consequatur, repellendus eius consectetur perspiciatis esse nam nostrum. Repudiandae voluptates eligendi quae, cum pariatur ipsum provident. Consectetur aspernatur, aliquid incidunt alias culpa vitae, voluptas omnis fugit eum quod reiciendis eos voluptatibus? Pariatur esse similique accusantium ipsa aliquam quae quo minima quasi vero sed tempora, repellendus aspernatur inventore nobis, laboriosam voluptatum libero perferendis officia voluptates! Quo veritatis natus dignissimos unde deleniti tenetur nemo repellat, quibusdam ipsum praesentium iure est vitae? Nulla atque exercitationem cumque beatae ut placeat libero quibusdam dignissimos vero esse laudantium ipsa eius, laborum quia quaerat accusamus nemo? Id, quam laudantium officia deserunt maxime esse velit porro quaerat labore voluptate ducimus eligendi dolorem laborum rem sapiente aliquam, voluptas dolorum nobis repellendus dolor ex. Accusantium nemo culpa vero voluptatum modi minus, earum eaque cupiditate accusamus facere magni inventore nesciunt voluptas mollitia ab sapiente dignissimos cum quibusdam. Delectus fugit quod minus. Id alias quae dolorem accusantium beatae vero voluptatibus reiciendis velit neque aut aperiam at ullam nobis porro tempora, ipsum quas maxime corporis consectetur itaque atque. Qui odio et fugit pariatur neque ipsa deleniti tempora quidem, ab accusantium maiores eius necessitatibus est possimus dolores? Molestias soluta omnis dolor odit repudiandae. Nostrum tenetur quasi magnam quidem error, pariatur necessitatibus obcaecati facilis sunt accusamus nulla iste laudantium cupiditate voluptas veniam exercitationem eaque possimus molestias laboriosam dolorem? Facilis soluta ratione a debitis rem quidem vel atque sit maxime nam, id ad repellat iure facere delectus possimus esse, repudiandae vero fuga fugiat laudantium. Aspernatur ipsa vel dignissimos doloribus? Accusamus laudantium recusandae nam laborum quisquam, quidem, fugiat nihil dolorum modi at corporis. Facilis possimus quibusdam ipsam delectus, pariatur ab! Reiciendis expedita temporibus rem? Mollitia iusto tenetur enim sapiente velit officia.
          </SText>
        </Scrollbars>
      </STextArea>

      {/* 参考演算子で表示切り替え */}
      <PrimaryButton src={editImage}>Edit</PrimaryButton>
      {/* or */}
      <MiniNormalButton src={cancelImage}>Cancel</MiniNormalButton>
      <MiniPrimaryButton src={saveImage}>Save</MiniPrimaryButton>
    </SContainer>
    </>
  )
}

const SContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const STextArea = styled.div`
  width: 85%;
  height: 100%;
  background-color: #fff;
  border-radius: 16px;
  padding: 30px 30px 0 30px ;
`;

const SText = styled.input`
  margin: 0;
`;
