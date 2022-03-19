import React, { useState, useRef } from 'react';
import NavBar from '../navbar/navbar';

function Home() {
  const listInnerRef = useRef<any>();
  const [showSearchBar, mouseWheelChanged] = useState(false);
  // scrollTop === 0 , scroll reached at the top
  // scrollHewight === scrollTop + clinet height , reached bottom
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop } = listInnerRef.current;
      if (scrollTop <= 0) {
        mouseWheelChanged(false);
      } else {
        mouseWheelChanged(true);
      }
    }
  };
  return (
    <section className='mo-home' onScroll={onScroll} ref={listInnerRef}>
      <NavBar wheel={showSearchBar} upDateEvent={mouseWheelChanged} />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsam
        sequi expedita saepe voluptatum amet. Vel ad molestiae tempora veniam ex
        recusandae architecto quo rem! Voluptates, libero! Nulla, aut modi. Est,
        unde ut? Maxime vitae omnis id soluta magni reprehenderit dolorem
        repudiandae? Modi doloribus architecto sequi impedit recusandae natus
        itaque optio labore! Vero doloremque dignissimos ipsa ullam ab corporis
        placeat! Ipsa minima, quo rerum veniam placeat vero sunt dolores
        quibusdam modi nihil inventore quae, reprehenderit autem quam! Nulla,
        sequi nobis? Id quas dolorem voluptas blanditiis! Eveniet placeat
        aliquid odio nulla. Debitis cum tempore sed. Ex atque odit asperiores
        delectus vel nulla totam itaque rem et suscipit laboriosam dolorum
        reiciendis, modi corporis unde esse provident minus vitae ullam illo
        maiores ipsum! Ipsa error doloribus praesentium fuga. Eveniet laudantium
        deleniti tempore sed alias voluptatibus, optio modi, repellendus quam
        omnis quos veniam magni corporis! Delectus impedit provident, harum
        culpa inventore eligendi animi esse! Rem, quae magnam dicta vitae sequi
        eligendi distinctio eaque ea, soluta voluptatibus cum consequuntur esse
        saepe veritatis voluptatum cumque et tempore! Animi a vero architecto
        error cumque voluptate provident maiores. Fugit maiores soluta deserunt
        neque velit delectus fugiat, commodi, mollitia sed eligendi culpa
        exercitationem quod numquam aperiam repellendus? Qui quod beatae laborum
        facere? Asperiores voluptates adipisci eum consequuntur rerum
        aspernatur. Dolorum corporis at, facere voluptatum atque officiis ipsa
        aut molestiae dolor ullam magnam! Eligendi vel cum eius velit cumque
        consequuntur hic delectus dolorum dolor? Magnam voluptatibus praesentium
        labore possimus blanditiis? Quidem molestiae iure quasi recusandae sit
        tenetur. Aperiam vitae facilis eveniet ab delectus consectetur ea minus
        rem alias dolore, necessitatibus corrupti dolor dolorem dignissimos
        tenetur praesentium cupiditate dolorum beatae? Blanditiis? Unde nisi
        commodi id quas modi sunt quia voluptatum distinctio temporibus, optio
        explicabo tempore enim iure soluta at repellendus magni? Commodi
        accusantium reprehenderit pariatur corporis ipsum iste necessitatibus
        facilis libero. Expedita aliquid corporis minima quae eligendi sed
        quaerat aperiam corrupti, quos repudiandae ipsum optio iste nam quisquam
        nulla odit incidunt qui quibusdam omnis ratione! Dolorum vitae nulla
        modi fugiat et. Assumenda numquam dolore, voluptates optio nesciunt
        libero eum ea aut non molestias eos, quod velit tempora ex dolores
        quibusdam! Ducimus commodi magnam eligendi voluptatibus molestiae sed,
        tempora quia! Minus, doloremque! Unde magni sunt numquam voluptatum
        dicta, maiores nostrum suscipit quia earum qui voluptatem consequuntur
        porro nobis ex aut aliquid ratione laboriosam facere! Et aliquid
        doloremque molestiae in quos minus. Ut. Ratione, iusto saepe! Voluptatum
        perspiciatis ipsa accusantium ducimus eligendi quas ipsam perferendis
        deserunt suscipit non sed, fugit doloremque laudantium illo a cumque
        totam eaque, corporis officia eum adipisci. Hic, fuga. Facere dolorem
        recusandae ex voluptatibus molestiae modi porro non totam odit quos
        possimus natus deserunt accusantium exercitationem in dolor laudantium
        aspernatur, ipsa voluptate fugit ducimus. Quaerat doloremque molestiae
        at deleniti. Ullam dolor omnis nesciunt sapiente quasi rem optio, sit
        numquam libero doloribus at cumque ipsa aspernatur voluptate qui
        explicabo quisquam tempora maiores. Nulla in dolores debitis quam
        expedita tempore aliquid. Non quam exercitationem aspernatur! Alias,
        quas suscipit? Non beatae expedita asperiores, voluptatibus, eaque
        voluptates placeat saepe quas laborum iusto error, facere nobis sed
        corporis quisquam commodi eum veniam. Commodi, culpa. Facilis, itaque
        reprehenderit? Alias pariatur molestiae dicta, consequuntur dolorem
        suscipit non nisi itaque maiores, adipisci sed quaerat ducimus vitae
        perferendis quidem aut ad. Nihil porro, provident obcaecati numquam
        architecto illum? Omnis deleniti numquam delectus repudiandae quos eius
        exercitationem rem harum, aliquam, voluptates ratione, soluta beatae
        quod dicta natus totam aperiam mollitia expedita! Ea atque laboriosam
        vel quas, maiores blanditiis inventore! Blanditiis voluptas excepturi
        accusantium molestiae rem exercitationem fuga voluptatem voluptatum
        obcaecati inventore minima odio nisi dolor necessitatibus, praesentium
        vel. Perspiciatis neque ex facilis. Repudiandae numquam optio, ipsam
        dignissimos debitis esse? Rerum eaque quis repellat delectus
        exercitationem qui, ullam ab nihil sequi porro, voluptatibus laborum
        odio voluptatum vero tempore vel nulla doloremque! Nisi vel quam
        voluptates unde, vero fuga dolorum quasi? Quas saepe praesentium
        laborum. Suscipit illo nisi facilis sit similique quis blanditiis modi.
        Quod nostrum voluptatum illo quaerat provident consequuntur, quibusdam
        distinctio laboriosam qui? Sapiente dolore veritatis commodi ipsam amet!
        Neque cupiditate tempore necessitatibus deleniti eligendi autem pariatur
        expedita animi non ex ipsam voluptates quas similique, culpa in,
        voluptatibus optio, eum iste! Facilis ullam officiis esse sed nisi,
        repellendus perspiciatis. Illum dolore ea corrupti, voluptates molestias
        quam quisquam temporibus porro voluptatibus inventore nesciunt error
        fugiat nemo ab quibusdam reprehenderit optio aliquam. Animi recusandae
        molestias quam beatae voluptatem consequuntur quibusdam delectus!
        Blanditiis soluta, cupiditate ab sunt, molestiae odio ducimus at iste
        obcaecati, quis consequatur nesciunt porro a beatae. Sequi illum tempora
        quo totam repellendus libero ducimus odit dolore fugiat esse. Quo?
        Consequatur quisquam porro eligendi esse dolorem harum eius explicabo
        ipsum optio animi numquam quidem obcaecati, temporibus aut repellendus
        cumque cupiditate. Facilis placeat et rerum esse dolores repellat quidem
        velit molestiae. Eligendi, consequuntur repellat nihil autem soluta rem,
        aliquam illo a officiis dolorum saepe quo reprehenderit quibusdam, ipsam
        vel ab sequi hic. Nihil repellendus ad illo laudantium, harum similique
        corrupti porro. Ratione, fuga! Doloribus corporis consequatur officiis
        iusto iure temporibus similique at veritatis autem dolorum consequuntur
        culpa fuga, animi dignissimos sit necessitatibus ipsam placeat
        perspiciatis numquam vero aliquid nihil quidem? Ducimus? Molestiae,
        ipsam reiciendis mollitia excepturi tenetur, autem sed maiores modi
        ipsum facilis praesentium ipsa perspiciatis velit consectetur, rerum
        nobis minus blanditiis culpa dolor. Dolorum quasi, dolore architecto
        deserunt eius vitae. Labore illo asperiores consequatur, sint at atque
        dolorem, sed praesentium neque fuga, cupiditate repellendus autem
        excepturi ducimus ullam sit architecto. Rerum earum quos autem sit
        impedit amet dolorem veniam eum! Commodi, voluptas, soluta quasi dolores
        hic laboriosam, consequatur harum error vero reiciendis asperiores
        tenetur aliquid? Reiciendis error placeat dolore amet laborum fuga eius
        odio eveniet, mollitia suscipit vel voluptatum et. Atque mollitia
        obcaecati minus, reiciendis corrupti rem nobis ipsum voluptas vel,
        cupiditate reprehenderit sint? Eligendi aperiam, quibusdam sed
        repudiandae eos, iure ducimus veniam eveniet numquam excepturi,
        obcaecati error unde fugit! Soluta esse quo tempore, placeat, ipsum
        quibusdam illo id consectetur iure repellendus quisquam explicabo
        adipisci quidem, deleniti quas aut consequuntur! Nulla eaque ad minima
        iure velit incidunt consequatur tempore debitis. Consectetur minima
        accusamus expedita, hic ex dolore, enim fuga beatae nemo optio rerum
        fugiat tempore. Aperiam quod magni excepturi, voluptas officiis
        repellendus voluptate odit, cumque officia dolores nisi nulla
        consequuntur? Aspernatur a enim officia beatae! Sunt sit quisquam nulla,
        placeat, neque fugiat non harum, ratione hic in adipisci quas modi
        repudiandae molestiae magni unde perferendis accusamus sapiente dolores
        nesciunt corporis. Eos incidunt alias pariatur dolore recusandae
        voluptatem fuga eveniet repudiandae rerum distinctio, quam, doloribus
        vitae, eum non in illo? Quia alias recusandae vero optio at voluptas
        sapiente nobis tenetur ipsum. Ab esse eligendi, perspiciatis voluptatum
        provident assumenda quae dignissimos perferendis unde facilis aut
        pariatur architecto asperiores explicabo iste voluptatibus quod
        doloremque, cupiditate veniam in dolores vitae! Qui nostrum deserunt
        labore. Eum delectus deserunt minus laboriosam explicabo aspernatur
        accusantium iste nesciunt corrupti quo, voluptates fugiat ex labore
        necessitatibus qui dolores suscipit optio consequuntur impedit earum
        quidem sunt similique vel est? Ullam. Voluptatibus nulla veritatis
        voluptates aut officia odio sunt tenetur, assumenda impedit, eius
        corporis. Distinctio minima blanditiis vitae quas. Mollitia molestias
        magnam laudantium quibusdam impedit reprehenderit rem fugit
        necessitatibus soluta aperiam. Iste porro necessitatibus eligendi
        tempore maiores, quam laborum veritatis dolores soluta, accusamus sit
        veniam quisquam ut ipsum consequuntur magnam quaerat tenetur minus
        fugiat eos totam ab repellendus quasi doloremque. Ex. Laborum fugit
        veritatis voluptatibus neque qui beatae facilis, cum autem similique
        pariatur, quam dignissimos iure excepturi molestias voluptates velit
        amet. Molestias dolor similique dolore perspiciatis praesentium
        consectetur adipisci laborum quaerat. Hic quae unde consectetur sapiente
        quisquam corrupti dolores nobis, dolor veritatis laborum aspernatur,
        molestias mollitia? Molestias velit, dolorum sunt, laudantium vero at
        blanditiis sed porro alias beatae soluta eos reprehenderit! Reiciendis
        fuga vitae numquam enim! Optio perspiciatis eaque magni minus expedita
        ipsa repudiandae vitae, beatae modi nemo laborum fugit aperiam nam, vel,
        et voluptatem ipsam. Laborum, eaque cum. Odio, doloremque. Beatae
        eligendi consequuntur facilis error unde placeat nobis aut officiis.
        Ipsam dignissimos molestiae aut atque odit perspiciatis temporibus id
        praesentium optio iste beatae, vitae unde corrupti maiores minus tempore
        delectus? Ducimus sint qui quisquam, dignissimos expedita perspiciatis
        deleniti mollitia eveniet quo reiciendis numquam sit corrupti hic porro
        rem quidem consequatur sequi, inventore ipsa repudiandae impedit minus,
        accusamus nobis exercitationem! Quia! Nesciunt, asperiores? Dolore totam
        commodi architecto vel quasi modi ipsum. Tenetur odit nesciunt adipisci!
        Provident perferendis adipisci accusamus est illo fugiat velit! Dolorum
        unde quod eius corrupti repellat officia culpa. Excepturi blanditiis rem
        dolore dolorem vel ad odio. Accusamus, incidunt. Perspiciatis sapiente
        ducimus officiis eveniet placeat illo sunt in iste consequuntur,
        distinctio, sit dolores, accusantium commodi vitae cum temporibus iusto?
        Vero earum nobis voluptatem aliquid culpa consequuntur accusamus
        corporis tempora optio sunt placeat, repudiandae neque odio incidunt
        cupiditate rerum quaerat similique dicta est corrupti nesciunt labore
        ad. Tempora, voluptatem assumenda? Officia voluptas quae ea natus quam
        qui ullam quisquam ab illo, eum omnis excepturi, aliquam harum unde
        necessitatibus voluptatum iste vel? In pariatur ipsum architecto sint
        animi, atque rerum iusto? Beatae, fuga numquam. Quo, saepe quisquam
        autem assumenda suscipit voluptatibus, sed maiores optio magni at quod a
        eum inventore necessitatibus dicta quia nulla quibusdam? Ad laborum
        harum alias eaque exercitationem.
      </div>
    </section>
  );
}

export default Home;
