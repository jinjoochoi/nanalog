package kr.co.nanalog.api.repository;

import kr.co.nanalog.api.entity.Page;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;
import java.util.Date;

/**
 * Created by choijinjoo on 2016. 7. 27..
 */
public interface PageRepository {

    @Query("select p from Page p where p.diaryId=?1")
    ArrayList<Page> getMyBoardByDiaryId(Long diaryId);

    @Query("delete from Page p" +
            "where p.diaryId = ?1")
    void deleteByDiaryId(Long diaryId);

    @Query("update Page p " +
            "set c.modifiedDate = ?2 where c.diaryId = ?1")
    void updatePageBy(Long diaryId, Date modifiedDate);

}