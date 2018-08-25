import Router from 'koa-router';
import map from './controller/map';

const router = new Router();

// 初始化地图
router.get('/mapInit', map);

export default router;
