package kr.co.nanalog.api.repository;

import kr.co.nanalog.api.entity.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * Created by choijinjoo on 2016. 7. 27..
 */
public interface PageRepository extends JpaRepository<Page, Long> {

    @Query("select p from Page p where p.uid=?1")
    List<Page> getPagesByUid(String uid);

    @Query("select p " +
            "from Page p " +
            "where p.pageId = ?1 ")
    Page findByPageId(Long pageId);
}
