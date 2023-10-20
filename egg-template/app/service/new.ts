import { Service } from 'egg';
export default class NewService extends Service {
  public async getNewsList() {
    // const { ctx } = this;
    // const newsList = await ctx.model.News.findAll();
    const newsList = [
      { id: 1, title: 'this is news 1', url: '/news/1', time: '2019-01-01' },
      { id: 2, title: 'this is news 2', url: '/news/2', time: '2019-01-02' },
    ];
    return newsList;
  }
}
