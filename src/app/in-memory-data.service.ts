import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 11, name: 'Ir. Sukarno', photo: 'https://i2.wp.com/jagad.id/wp-content/uploads/2018/02/Ir.-Soekarno.jpg?resize=300%2C171&ssl=1'},
      {id: 12, name: 'Mohammad Hatta', photo: 'https://i0.wp.com/jagad.id/wp-content/uploads/2018/02/Mohammad-Hatta.jpg?resize=300%2C169&ssl=1'},
      {id: 13, name: 'K. H. Ahmad Dahlan', photo: 'https://2.bp.blogspot.com/-tLl0_vN1Pgw/WWt2knH7FTI/AAAAAAAACKY/edUjKpCCnXAB4KV9g7dXfQl7iAY3uwJiACLcBGAs/s1600/ahmad%2Bdahlan.jpg'},
      {id: 14, name: 'Jenderal Sudirman', photo: 'https://i0.wp.com/jagad.id/wp-content/uploads/2018/02/Jenderal-Sudirman.jpg?resize=300%2C189&ssl=1'},
      {id: 15, name: 'Pangeran Diponegoro', photo: 'https://i1.wp.com/jagad.id/wp-content/uploads/2018/02/Pangeran-Diponegoro.jpg?resize=300%2C150&ssl=1'},
      {id: 16, name: 'Cut Nyak Dhien', photo: 'https://i1.wp.com/upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Tjoet_Nya%27_Dhien.jpg/220px-Tjoet_Nya%27_Dhien.jpg?resize=220%2C306&ssl=1'},
      {id: 17, name: 'Tuanku Imam Bonjol', photo: 'https://i2.wp.com/jagad.id/wp-content/uploads/2018/02/Tuanku-Imam-Bonjol.jpg?resize=300%2C194&ssl=1'},
      {id: 18, name: 'Ki Hajar Dewantara', photo: 'https://i2.wp.com/jagad.id/wp-content/uploads/2018/02/Ki-Hajar-Dewantara.jpg?resize=273%2C300&ssl=1'},
      {id: 19, name: 'Sultan Iskandar Muda', photo: 'https://i2.wp.com/jagad.id/wp-content/uploads/2018/02/Sultan-Iskandar-Muda.jpg?w=300&ssl=1'},
      {id: 20, name: 'I Gusti Ngurah Rai', photo: 'https://i1.wp.com/jagad.id/wp-content/uploads/2018/02/I-Gusti-Ngurah-Rai.jpg?w=227&ssl=1'}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
