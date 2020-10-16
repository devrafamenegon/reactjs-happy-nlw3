import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602628663257 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //  REALIZAR ALTERAÇÕES
        //  CRIAR TABELAS, CAMPOS, DELETAR E ETC

        await queryRunner.createTable(new Table({ 
          name: 'orphanages', // Nome da tabela
          columns: [ //contendo as colunas:
            {
              name: 'id',                      //nome da coluna
              type: 'integer',                 //tipo inteiro
              unsigned: true,                  //não negativa
              isPrimary: true,                 //chave única do usuário (prymary key)
              isGenerated: true,               //gerada automaticamente
              generationStrategy: 'increment', //gerada com um incremento, exemplo --> 47, 48, 49
            },
            {
              name: 'name',
              type: 'varchar',
            },
            {
              name: 'latitude',
              type: 'decimal',
              scale: 10,    //A escala numérica refere-se ao número máximo de casas decimais. ou seja, 123456.789 tem uma escala de 3
              precision: 2, //A precisão numérica refere-se ao número máximo de dígitos presentes no número. ou seja, 1234567.89 tem uma precisão de 9
            },
            {
              name: 'longitude',
              type: 'decimal',
              scale: 10,    
              precision: 2,
            },
            {
              name: 'about', //informações do orfanato
              type: 'text',
            },
            {
              name: 'instructions', //informações para visita
              type: 'text',
            },
            {
              name: 'opening_hours', //informações para visita
              type: 'varchar',
            },
            {
              name: 'open_on_weekends', //aberto aos finais de semana?
              type: 'boolean',
              default: false,
            },
            
          ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('orphanages');
    }
}
