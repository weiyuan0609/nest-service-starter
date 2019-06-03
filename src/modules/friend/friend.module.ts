import { Module } from '@nestjs/common';
import { FriendController } from './../../controllers/friend/friend.controller';


@Module({
  imports: [],
  controllers: [FriendController],
  providers: [],
})
export class FriendModule {}