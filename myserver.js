const studys = [
    { value: 1, name: 'Javaプログラミング'},
    { value: 2, name: 'Pythonプログラミング'},
    { value: 3, name: 'コンピュータ概説'},
    { value: 4, name: 'コンピュータシステム概説'},
    { value: 5, name: 'データベース技術'},
    { value: 6, name: 'ネットワーク技術'},
    { value: 7, name: '情報セキュリティ概説'},
    { value: 8, name: 'ITマネジメント・ストラテジ概説'},
    { value: 9, name: '基本情報対策演習'},
    { value: 10, name: 'Webシステム開発基礎'},
    { value: 11, name: 'オフィスソフト実習'},
    { value: 12, name: 'ゲーム制作概説'},
    { value: 13, name: 'クライアントサイドプログラミング'},
    { value: 14, name: 'サーバーサイドプログラミング'},
    { value: 15, name: 'ゲームプログラミング'},
    { value: 16, name: 'ネットワークサーバ構築'},
    { value: 17, name: 'ゲームキャラクタ制作'},
    { value: 18, name: 'ゲームコンテンツ制作'},
    { value: 19, name: 'ゲームアプリケーションソフト開発'},
    { value: 20, name: 'ゲーム運営システム開発'},
    { value: 21, name: 'ドキュメンテーション技法演習'},
    { value: 22, name: '創造的思考法演習'},
    { value: 23, name: 'ホームルーム'},
    { value: 24, name: '情報英語基礎'},
  ]
  const jsSelectBox = document.querySelector('.js-selectbox');
  const selectWrap = document.createElement('div');
  selectWrap.classList.add('selectwrap');
  const select = document.createElement('select');
  select.classList.add('select');
  animals.forEach((v) => {
    const option = document.createElement('option');
    option.value = v.value;
    option.textContent = v.name;
    select.appendChild(option);
  });
  selectWrap.appendChild(select);
  jsSelectBox.appendChild(selectWrap);