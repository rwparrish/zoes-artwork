"""add image column to artworks table

Revision ID: 8bc1814fb828
Revises: 390650315f7d
Create Date: 2024-04-23 12:18:58.367100

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8bc1814fb828'
down_revision = '390650315f7d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('artworks', schema=None) as batch_op:
        batch_op.add_column(sa.Column('image', sa.String(length=100), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('artworks', schema=None) as batch_op:
        batch_op.drop_column('image')

    # ### end Alembic commands ###