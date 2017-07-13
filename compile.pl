#!perl
use strict;
use warnings;

use Path::Tiny qw( path );
my $source = path('./index.html.tpl')->slurp_utf8;

sub gen_notice {
  my ( $file ) = @_;
  return <<"EOF";
/* included from $file  */
EOF
}
sub get_source { 
  my ( $file ) = @_;
  return gen_notice($file) . path($file)->slurp_utf8;
}

$source =~ s{[<][!]include_script\s+["]([^"]+)["][>]}{
  get_source($1)
}gex;

path('./index.html')->spew_utf8( $source );
